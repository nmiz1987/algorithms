export default function BinarySearchList(arr: number[], target: number): boolean {
  let lo = 0;
  let hi = arr.length;

  do {
    const m = Math.floor((lo + hi) / 2);
    const c = arr[m];
    if (c === target) {
      return true;
    } else if (c > target) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);
  return false;
}

// O(log(N))
