import { expect, test } from "@jest/globals";
import { tree } from "../tree";

import bfs from "./BTBFS";

test("bt bfs", function () {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});
