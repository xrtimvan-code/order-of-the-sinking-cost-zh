// What the page calls a Freezer: an ice cage (model A) or an ice gate (model B, `doorway`), one or many
import { describe, expect, test, vi } from 'vitest';
import { capitalized, freezerNoun, freezersNoun, isDoorway, modelNoun } from '../src/model/freezer-names.ts';

// Freezers 0 and 1 are pods, 2 and 3 doorways
vi.mock('../src/data.ts', () => {
    const data = { freezers: [{ req: [] }, { req: [] }, { req: [], doorway: 1 }, { req: [], doorway: 1 }] };
    return { SCHEMA: {}, PROG: data, WORLD: {}, worldReady: Promise.resolve() };
});

describe('Freezer names', () => {
    test('one Freezer by its model', () => {
        expect(isDoorway(0)).toBe(false);
        expect(isDoorway(2)).toBe(true);
        expect(freezerNoun(0)).toBe('冰笼');
        expect(freezerNoun(2)).toBe('冰门');
    });

    test('a set of Freezers of one model', () => {
        expect(freezersNoun([0, 1])).toBe('冰笼');
        expect(freezersNoun([2, 3])).toBe('冰门');
        expect(modelNoun(false)).toBe('冰笼');
        expect(modelNoun(true)).toBe('冰门');
    });

    test('a set of Freezers of both models', () => {
        expect(freezersNoun([0, 2])).toBe('冰笼与冰门');
        expect(freezersNoun([3, 1, 0])).toBe('冰笼与冰门');
    });

    test('labels', () => {
        expect(capitalized(freezerNoun(0))).toBe('冰笼');
        expect(capitalized(freezerNoun(3))).toBe('冰门');
        expect(capitalized(freezersNoun([1, 2]))).toBe('冰笼与冰门');
    });
});
