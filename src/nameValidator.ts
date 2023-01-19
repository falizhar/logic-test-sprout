export const validName = (name: string): boolean => {
    const terms: string[] = name.split(" ");
    const hasMiddleName: boolean = terms.length === 3;

    // Check if name is 2 or 3 terms long
    if (terms.length !== 2 && !hasMiddleName) return false;

    // check if terms are valid
    if(hasMiddleName && terms[0].endsWith('.') && !terms[1].endsWith('.')) return false;

    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        if (!(/^[A-Z]\.$/.test(term) || /^[A-Z][A-Za-z]+$/.test(term))) return false;
    }

    return true;
}
