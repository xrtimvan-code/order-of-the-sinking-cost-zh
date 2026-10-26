// Why the walk calls a level unreachable: the closed gates in front of it, the layer it is on, and the mechanics the
// walk does not model near the way in, named while spoilers show or once the save has met them (their world's
// achievement) (VIEWER.md "Pockets, leads and why", "The spoiler model (viewer)")
import { hasAchievement } from '../model/achievements.ts';
import { freezerNoun, freezersNoun } from '../model/freezer-names.ts';
import { layerName, wayTo } from '../model/layers.ts';
import type { ProgressModel } from '../model/progress-model.ts';
import type { ShownProgress } from '../model/progress.ts';
import type { Reachability } from '../walk/reachability.ts';
import type { PanelContext } from './context.ts';

/** The members of the panel context that the why text reads. */
export interface WhyContext extends Pick<PanelContext, 'hide' | 'freezers' | 'iceOf' | 'gateShown' | 'gateArea'> {
    status: Pick<PanelContext['status'], 'achievements'>;
    progress: Pick<ShownProgress, 'wayIn' | 'wayInAll' | 'why' | 'access' | 'behind'> & {
        reach: Pick<Reachability, 'fromSky'> | null;
    };
    model: Pick<ProgressModel, 'stepShown'>;
}

/**
 * The pieces of why a level is not reachable: its gates, the mechanics and the layer it needs, whether nothing is known,
 * whether a drop from the sky leads into it (`skyEntry`) and whether that shows (`fromSky`), and the gates in front of
 * it that the level itself unlocks.
 */
export interface WhyParts {
    gate: string;
    mech: string;
    layer: string;
    none: boolean;
    skyEntry: boolean;
    fromSky: boolean;
    ownGates: string;
}

// the world's achievement that names a mechanic, and the mechanic in the game's words (it capitalises its objects)
const MECHANICS: Record<string, [achievement: string, text: string]> = {
    dragon: ['HEROES', '龙焰'],
    beam: ['PROMISE', '光束'],
    mirror: ['MIRRORS', '魔镜'],
    stones: ['SKIPPING', '飞石'],
};

/** A level's way-in gates that fog does not hide. */
export function wayIn(context: WhyContext, levelIndex: number): number[] {
    const gates = context.progress.wayIn?.[levelIndex] || [];
    return gates.filter((freezerIndex) => context.gateShown(context.freezers[freezerIndex]));
}

// " · <area>" after a gate's text while the gate's area is shown
function gateAreaSuffix(context: WhyContext, freezerIndex: number): string {
    const area = context.gateArea(freezerIndex);
    if (area == null) return '';
    return ' · ' + area;
}

function gateText(context: WhyContext, levelIndex: number, gates: number[]): string {
    if (!gates.length) return '';

    const ice = context.iceOf[levelIndex];
    if (ice !== undefined && gates.includes(ice)) return `位于${freezerNoun(ice)}中${gateAreaSuffix(context, ice)}`;
    // the gates the table asks for are all needed, whether or not the walk finds a way in besides
    const needed = context.progress.wayInAll?.get(levelIndex) ?? [];
    if (gates.length > 1 && gates.every((freezerIndex) => needed.includes(freezerIndex))) {
        return `需穿过全部 ${gates.length} 个${freezersNoun(gates)}`;
    }

    if (gates.length > 1) return `需穿过 ${gates.length} 个${freezersNoun(gates)}之一`;
    return `位于${freezerNoun(gates[0])}后方${gateAreaSuffix(context, gates[0])}`;
}

// the closed gates a level's pocket bumps into, when every one of them that fog shows needs the level itself
function ownGatesText(context: WhyContext, levelIndex: number): string {
    const bumped = context.progress.behind[levelIndex] || [];
    const shown = bumped.filter((freezerIndex) => context.gateShown(context.freezers[freezerIndex]));
    if (!shown.length || shown.length < bumped.length) return '';

    const needsLevel = (freezerIndex: number) => context.freezers[freezerIndex].req.includes(levelIndex);
    if (!shown.every(needsLevel)) return '';

    if (shown.length > 1) return `已知入口仅位于该关卡自身解锁的${freezersNoun(shown)}后方`;
    return `已知入口仅位于该关卡自身解锁的${freezerNoun(shown[0])}后方${gateAreaSuffix(context, shown[0])}`;
}

function mechanicsText(context: WhyContext, mechanics: string[]): string {
    if (!mechanics.length) return '';

    const known = mechanics.filter((key) => !context.hide || hasAchievement(context.status, MECHANICS[key][0]));
    if (!known.length) return '可能需要地图模型未涵盖的机制';
    return `可能需要${known.map((key) => MECHANICS[key][1]).join(' / ')}`;
}

/** The pieces of why a level the walk cannot reach may still be reachable, as the panels word them. */
export function whyParts(context: WhyContext, levelIndex: number): WhyParts {
    const progress = context.progress;
    const mechanics = progress.why?.[levelIndex]?.mech ?? [];
    const layer = progress.access?.[levelIndex];

    // a layer the walk has not reached, named once its way onto it shows as a plan step
    let layerText = '';
    if (layer && context.model.stepShown({ t: 'a', id: layer })) {
        layerText = `需要${wayTo(layer)}`;
    }

    // a drop from a sky ledge leads into the level's pocket; named once the sky shows
    const skyEntry = !!progress.reach?.fromSky[levelIndex];
    const fromSky = skyEntry && context.model.stepShown({ t: 'a', id: 'sky' });
    return {
        gate: gateText(context, levelIndex, wayIn(context, levelIndex)),
        mech: mechanicsText(context, mechanics),
        layer: layerText,
        none: !progress.wayIn?.[levelIndex]?.length && !mechanics.length && !layer,
        skyEntry,
        fromSky,
        ownGates: ownGatesText(context, levelIndex),
    };
}

/** The tooltip that says the walk model is approximate, naming what it leaves out while spoilers show. */
export function approxTip(context: WhyContext): string {
    let leftOut = '魔镜、竖直光束和龙焰';
    if (context.hide) leftOut = '部分机制';
    return `近似结果：路线模型未涵盖${leftOut}`;
}

/** Why the walk calls a level unreachable, in one line. */
export function whyText(context: WhyContext, levelIndex: number): string {
    const parts = whyParts(context, levelIndex);
    const text = [parts.gate, parts.mech, parts.layer].filter(Boolean).join(' · ');
    if (text) return text;
    if (!parts.none) return '无法从已到访位置到达';

    // a sky under fog is not named; while a drop from it leads in, the gates the level unlocks are not its only way
    if (parts.fromSky) return `从${layerName('sky')}进入`;
    if (parts.skyEntry) return '无法从已到访位置到达';
    if (parts.ownGates) return parts.ownGates;
    return '暂无已知路线';
}
