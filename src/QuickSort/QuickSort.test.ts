import { expect, test } from "@jest/globals";
import QuickSort from "./QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    QuickSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
