export const truncate = (str, max = 50) =>
    str.length > max ? str.slice(0, max - 1) + "…" : str;