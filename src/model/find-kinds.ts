// The kinds of mark the sidebar's Find on the map names, in the order it lists them (VIEWER.md "The page (viewer)")
import type { OverlayKind } from '../map/map-html.ts';
import { capitalized, modelNoun } from './freezer-names.ts';

/** A kind of mark with a Find on the map row: every overlay switch but Reachable. */
export type FindKind = Exclude<OverlayKind, 'reach'>;

/** The kinds in the sidebar's order, each with its plural label. */
export const FIND_KINDS: Array<[kind: FindKind, label: string]> = [
    ['pods', capitalized(modelNoun(false))],
    ['doorways', capitalized(modelNoun(true))],
    ['signs', '告示牌'],
    ['tps', '传送点'],
    ['towerPads', '高塔传送点'],
    ['logs', '语音记录'],
    ['maps', '地图卷轴'],
    ['treasures', '宝藏基座'],
];

export function findLabel(kind: FindKind): string {
    const found = FIND_KINDS.find(([each]) => each === kind);
    if (!found) throw new Error(`No Find on the map row for ${kind}`);
    return found[1];
}

export const isFindKind = (kind: string): kind is FindKind => FIND_KINDS.some(([each]) => each === kind);
