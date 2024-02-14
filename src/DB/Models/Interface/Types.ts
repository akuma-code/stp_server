export type IGlassPropsFields =
    | 'multi'
    | 'simple'
    | 'simple'
    | 'soundproof'
    | 'hitproof'
    | 'solarproof'
export type IGlassProps = Record<IGlassPropsFields, boolean> & { formula: string }

export type IFormulaProps = { formula: string, glassPropId?: number }