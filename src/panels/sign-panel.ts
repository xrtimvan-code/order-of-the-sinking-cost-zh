// A sign's panel on the map: satisfied or not, what it needs, its tower, the path to satisfy it and the gates it opens
// (VIEWER.md "The page (viewer)")
import { escapeHtml } from '../util.ts';
import type { MapLink, SelectHow } from '../map/map-view.ts';
import { unlockPlan } from '../model/plans.ts';
import { towerEmblemHtml } from '../map/icons.ts';
import { towerName } from '../model/towers.ts';
import { signStateOf } from '../model/unlocking.ts';
import type { Sign } from '../types.ts';
import type { PanelContext } from './context.ts';
import { markSelected } from './list.ts';
import { chainOf, gateChip, layerNote, panelHead, pathHtml, signNeed, stepsOf } from './plan-chips.ts';

function opensHtml(context: PanelContext, sign: Sign, gateIds: number[]): string {
    if (!gateIds.length) return '';

    const chips = gateIds.map((freezerIndex) => gateChip(context, freezerIndex)).join('');
    let html = `<div class="h">可开启</div><div>${chips}</div>`;
    if (gateIds.length < sign.gates.length) html += '<div class="muted">更多内容仍在迷雾中</div>';
    return html;
}

export function showSignPanel(context: PanelContext, signIndex: number, how?: SelectHow): void {
    const progress = context.progress;
    context.remember(['sign', signIndex]);
    markSelected(context, null);

    const sign = context.signs[signIndex];
    const signState = signStateOf(progress, sign);
    const gateIds = sign.gates.filter((freezerIndex) => context.gateShown(context.freezers[freezerIndex]));

    let towerIndex: number | undefined;
    if (sign.tower != null && progress.towers[sign.tower] && !progress.towerHidden[sign.tower]) {
        towerIndex = sign.tower;
    }

    let html = panelHead(context, '告示牌');
    let status = '尚未满足';
    let statusTone = '';
    if (signState === 'read') {
        status = '已阅读';
        statusTone = ' good';
    }
    if (signState === 'ready') {
        status = '可阅读';
        statusTone = ' warn';
    }

    html += `<div><span class="chip${statusTone}">${status}</span></div>`;
    if (signState === 'ready') html += '<div class="muted">站在告示牌旁并面向它，即可阅读。</div>';
    html += `<div class="h">需要</div><div>${signNeed(context, sign)}</div>`;
    if (towerIndex !== undefined) {
        const tower = progress.towers[towerIndex];
        const name = towerEmblemHtml(tower) + escapeHtml(towerName(tower.t));
        html += `<div><span class="chip" data-ptower="${towerIndex}" tabindex="0" role="button">${name}</span></div>`;
    }

    let plan = null;
    if (signState === 'unmet') plan = unlockPlan(progress, ['sign', signIndex]);

    const steps = plan && stepsOf(context, plan);
    const chain = chainOf(context, plan, steps);
    html += pathHtml(context, plan, false, steps) + layerNote(context, chain, sign.p[2]);
    context.chainPoints = chain.points;

    html += opensHtml(context, sign, gateIds);

    const gateLinks = gateIds.map((freezerIndex): MapLink => [sign.p, context.freezers[freezerIndex].p, 'req']);
    const gateOverlays = gateIds.map((freezerIndex) => 'g' + freezerIndex);
    context.map?.select(
        {
            levels: chain.levels,
            frontier: chain.frontier,
            overlays: new Set(['s' + signIndex, ...gateOverlays, ...chain.overlays]),
            html,
            z: sign.p[2],
            points: [sign.p, ...gateIds.map((freezerIndex) => context.freezers[freezerIndex].p), ...chain.points],
            links: [...gateLinks, ...chain.links],
            steps: chain.steps,
        },
        how,
    );
}
