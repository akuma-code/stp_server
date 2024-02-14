import { IFormulaProps, IGlassProps } from "../Interface/Types";

export const gpreset: IGlassProps[] = [
    {
        formula: '4-16-4',
        simple: true,

    },
    {
        formula: '4-6-4-6-4',
        simple: true,

    },
    {
        formula: '4TopN-16-4',
        simple: true,

    },
    {
        formula: '4-20-4',
        simple: true,

    },
    {
        formula: '4TopN-20-4',
        simple: true,

    },
    {
        formula: '4-14-4-14-4',
        simple: true,

    },
].map(i => ({
    ...i,
    multi: false,
    soundproof: false,
    hitproof: false,
    solarproof: false
}))

export const formulaPreset: IFormulaProps[] = [
    { formula: '4-16-4' },
    { formula: '4-6-4-6-4' },
    { formula: '4TopN-16-4' },
    { formula: '4-20-4' },
    { formula: '4TopN-20-4' },
    { formula: '4-14-4-14-4' },

    { formula: '4-16Ar-4Эл' },
    { formula: '6-14Ar-4Эл' },
    { formula: '4-20Ar-4Эл' },
    { formula: '4-12-4-12Ar-4Эл' },
    { formula: '6-10-4-12Ar-4Эл' },
    { formula: '4-12-4-16Ar-4Эл' },
    { formula: '4-14-4-14-4Эл' },
    { formula: '4-14-4-14Ar-4Эл' },
    { formula: '4-16Ar-4Сбр' },
    { formula: '4-20Ar-4Сбр' },
    { formula: '4-12-4-12Ar-4Сбр' },
    { formula: '4TopN-12Ar-4TopN-12Ar-4' },
    { formula: '4TopN-14Ar-4-14-4' },
    { formula: '4TopN-14Ar-4TopN-14Ar-4' },
    { formula: '4-14-6' },
    { formula: '4TopN-14Ar-6(FHcl)' },
    { formula: '4TopN-16Ar-4(FHcl)' },
    { formula: '4-12-4.4.1' },
    { formula: '4-14-3.3.1' },
    { formula: '6-10-4.4.1' },
    { formula: '3.3.1-14Ar-4Эл' },
    { formula: '4TopN-14Ar-3.3.1' },
    { formula: '6TopN-10Ar-4.4.1' },
    { formula: '4TopN-20Ar-4(FHcl)' },
    { formula: '4TopN-12Ar-4.4.1' },
    { formula: '4TopN-12Ar-4-12-4(FHcl)' },
    { formula: '4-10-4-10-4.4.1' },
    { formula: '4-10-4-12-3.3.1' },
    { formula: '6-9-4-9-4.4.1' },
    { formula: '4TopN-10Ar-4-10-4.4.1' },
    { formula: '4TopN-10Ar-4-12-3.3.1' },
    { formula: '6TopN-9Ar-4-9--4.4.1' },
    { formula: '3.3.1-10-4-12Ar-4Эл' },
    { formula: '4TopN-12Ar-4-14-6' },
    { formula: '4-12-4-12-3.3.1' },
    { formula: '4-12-4-12-4.4.1' },
    { formula: '4TopN-12Ar-4-12-4.4.1' },
    { formula: '4TopN-12Ar-4-14-3.3.1' },
    { formula: '4.4.1-24-4.4.1' },
].map((f, i) => i < 5 ? { ...f, glassPropId: i + 1 } : f)



