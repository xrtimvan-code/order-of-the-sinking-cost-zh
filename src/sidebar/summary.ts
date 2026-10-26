// The sidebar's save summary: how much is solved, where the hero is and the save's stats
// (VIEWER.md "The page (viewer)", "The spoiler model (viewer)")
import { PROG } from '../data.ts';
import { escapeHtml } from '../util.ts';
import { percent, progressBarHtml } from '../format.ts';
import { readPreference } from '../shared.ts';
import { areaName } from '../model/areas.ts';
import type { ProgressModel } from '../model/progress-model.ts';
import { CHEVRON, areaEmblemHtml, heroIcon } from '../map/icons.ts';
import type { DemoStatus, Status } from '../status-file.ts';

/** The solved levels out of the levels not under fog, as a percentage and a bar with the partially solved ones in it. */
export function solvedHtml(model: ProgressModel): string {
    const progress = model.progress;
    const notHidden = model.levels.length - progress.hidden.filter(Boolean).length;
    const partial = progress.state.filter(
        (levelState, levelIndex) => levelState === 'partial' && !progress.hidden[levelIndex],
    ).length;

    const solvedPercent = percent(progress.solved, notHidden);
    const bar = progressBarHtml(progress.solved, notHidden, partial);
    const label = `${solvedPercent} <span class="lb">已解开</span>`;
    return `<div class="solved"><span class="pc" title="占已揭开迷雾的关卡">${label}</span>${bar}</div>`;
}

// Status gameplay counters by index (status +244..+280; index 3, +256, is never incremented)
const COUNTERS: Array<[index: number, label: string]> = [
    [0, '拾取宝石次数'],
    [1, '放置宝石次数'],
    [2, '拾取神器次数'],
    [4, '切换巨龙跟随次数'],
    [5, '短杖使用次数'],
    [6, '光束转向次数'],
    [7, '棱镜使用次数'],
    [8, '进入关卡次数'],
    [9, '激活操作次数'],
];

export function statsHtml(model: ProgressModel): string {
    const open = readPreference('statsOpen') === '1';
    const counters = model.status.counters;

    // with spoilers hidden a zero counter is left out: its row would name a mechanic the player has not met
    const rowsHtml = COUNTERS.map(([index, label]) => {
        const value = counters?.[index];
        if (value == null || (model.hide && value <= 0)) return '';

        const count = value.toLocaleString('zh-CN');
        return `<div class="kr"><span>${escapeHtml(label)}</span><span class="v">${count}</span></div>`;
    }).join('');

    let openClass = '';
    let hidden = ' hidden';
    if (open) {
        openClass = ' open';
        hidden = '';
    }

    const rows = `<div class="srows" id="statsRows"${hidden}>${rowsHtml}</div>`;
    const title = '存档中记录的统计数据';
    const attributes = `id="statsTog" aria-expanded="${open}" aria-controls="statsRows" title="${title}"`;
    const toggle = `<button class="plain stog" ${attributes}><span>统计</span>${CHEVRON}</button>`;
    return `<div class="np sstats${openClass}" id="sideStats">${toggle}${rows}</div>`;
}

/** Always one line, so the sidebar keeps its geometry whatever the save is doing. */
export function inLevelHtml(status?: Status | DemoStatus | null, model?: ProgressModel | null): string {
    if (model?.inLevel != null) {
        const name = escapeHtml(model.levels[model.inLevel].n);
        const attributes = 'id="inLevel" title="在地图上显示"';
        return `<button class="plain inlv" ${attributes}>${heroIcon}<span class="n">${name}</span></button>`;
    }

    if (model?.onOverworld) {
        let area = '地表';
        let emblem = '';
        if (model.heroArea != null) {
            const heroArea = PROG.areas[model.heroArea];
            area = escapeHtml(areaName(heroArea));
            emblem = areaEmblemHtml(heroArea);
        }

        const line = `${heroIcon}${emblem}<span class="n">${area}</span>`;
        if (!model.hero) return `<div class="inlv">${line}</div>`;

        const attributes = 'id="heroLine" title="将地图移至英雄位置"';
        return `<button class="plain inlv" ${attributes}>${line}</button>`;
    }

    let levelName = '';
    if (model && !model.demo) levelName = status?.currentLevel || '';
    return `<div class="inlv muted">${escapeHtml(levelName)}</div>`;
}
