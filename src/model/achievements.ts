// Achievements, the endings and the rank markers (PROGRESSION.md "Achievements and ranks", "Endings")
import { PROG, SCHEMA } from '../data.ts';
import { towerAchievement } from './towers.ts';
import type { TowerProgress } from './towers.ts';

/** What earns an achievement the page can say: the levels it asks for, the tower, or the layer a rank marker stands on. */
export interface AchievementRule {
    text: string;
    levels?: number[];
    tower?: TowerProgress;
    layer?: string;
}

/** The rank each ending's achievement gives. */
export const ENDINGS: Array<[rank: number, achievement: string]> = [
    [1, 'ENDGAME1'],
    [3, 'ENDGAME2'],
    [5, 'ENDGAME3'],
];

// Chinese viewer labels keyed by Steam API name; these are not verified Steam Chinese achievement names.
const ACHIEVEMENT_NAMES: Record<string, string> = {
    GOLD_HM: '黄金 HxM',
    GOLD_HS: '黄金 HxS',
    GOLD_HP: '黄金 HxB',
    GOLD_MS: '黄金 MxS',
    GOLD_MP: '黄金 MxB',
    GOLD_SP: '黄金 SxB',
    TOWER_HM: '对映 HxM',
    TOWER_HS: '对映 HxS',
    TOWER_HP: '对映 HxB',
    TOWER_MS: '对映 MxS',
    TOWER_MP: '对映 MxB',
    TOWER_SP: '对映 SxB',
    TOWER_H_SKY: '高空 英雄',
    TOWER_M_SKY: '高空 魔镜',
    TOWER_S_SKY: '高空 飞石',
    TOWER_P_SKY: '高空 光束发射器',
    TOWER_HM_UNDERWORLD: '地下 HxM',
    TOWER_HS_UNDERWORLD: '地下 HxS',
    TOWER_HP_UNDERWORLD: '地下 HxB',
    TOWER_MS_UNDERWORLD: '地下 MxS',
    TOWER_MP_UNDERWORLD: '地下 MxB',
    TOWER_SP_UNDERWORLD: '地下 SxB',
    ASCEND: '上升',
    DESCEND: '下降',
    ENDGAME1: '终局',
    ENDGAME2: '终局：高空',
    ENDGAME3: '终局：地下',
    COMPLETIONIST: '全收集',
    HEROES: '英雄',
    MIRRORS: '镜之群岛',
    SKIPPING: '飞石成径',
    PROMISE: '光束发射器',
};

/** A Chinese achievement label; unknown values fall back to their English enum name in sentence case. */
export function achievementName(name: string): string {
    if (ACHIEVEMENT_NAMES[name]) return ACHIEVEMENT_NAMES[name];
    return (name[0] + name.slice(1).toLowerCase()).replace(/_/g, ' ');
}

/** The grant_rank markers: achievement, rank, the layer they stand on. */
export const MARKER_RANKS: Array<[achievement: string, rank: number, layer: string]> = [
    ['ASCEND', 2, 'sky'],
    ['DESCEND', 4, 'underworld'],
];

/** The achievement that gives rank `rank`: an ending's or a grant_rank marker's. */
export function rankAchievement(rank: number): string | null {
    const ending = ENDINGS.find(([endingRank]) => endingRank === rank);
    if (ending) return ending[1];
    const marker = MARKER_RANKS.find(([, markerRank]) => markerRank === rank);
    return marker?.[0] ?? null;
}

/** Whether the status holds the achievement. */
export function hasAchievement(status: { achievements: bigint }, name: string): boolean {
    const bit = SCHEMA.enums.Achievement?.values.find(([valueName]) => valueName === name)?.[1];
    return bit != null && ((BigInt.asUintN(64, status.achievements) >> BigInt(bit)) & 1n) === 1n;
}

/** What earns each achievement the page can say, by achievement name. */
export function achievementRules(progress: { towers: TowerProgress[] }): Map<string, AchievementRule> {
    const rules = new Map<string, AchievementRule>();
    PROG.levels.forEach((level, index) => {
        if (level.a) rules.set(level.a, { text: '', levels: [index] });
    });

    for (const tower of progress.towers) {
        rules.set(towerAchievement(tower.t), { text: '解开所需关卡', tower });
    }

    rules.set('ASCEND', { text: '称号：推手', layer: 'sky' });
    rules.set('DESCEND', { text: '称号：无畏者', layer: 'underworld' });
    rules.set('COMPLETIONIST', { text: '全部关卡' });
    return rules;
}

/** The game's achievements in value order (value 0 is none). */
export function achievementNames(): string[] {
    return (SCHEMA.enums.Achievement?.values || []).filter(([, value]) => value > 0).map(([name]) => name);
}
