export const findDisappeared = (nums: number[]): number[] => {
    let set = new Set<number>()
    for (let i = 1; i <= nums.length; i++) set.add(i);
    for (let num of nums) if (set.has(num)) set.delete(num);
    return Array.from(set);
}