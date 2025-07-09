export const emptyToUndefined = <T,>(v: T) => v === "" ? undefined : v;

export const emptyToZeroOrNumber = (v: string) => v === "" ? 0 : Number(v);