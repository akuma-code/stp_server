export type IGlassPropsFields =
    | 'multi'
    | 'simple'
    | 'simple'
    | 'soundproof'
    | 'hitproof'
    | 'solarproof'
export type IFormulaProps = {
    id?: number
    formula: string,
    glassPropId?: number,
}
export type IGlassProps = Partial<Record<IGlassPropsFields, boolean>> & IFormulaProps


export type GlassBoolPropsPartial = Partial<Record<IGlassPropsFields, boolean>>