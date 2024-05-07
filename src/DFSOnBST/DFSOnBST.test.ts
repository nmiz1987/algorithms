import { expect, test } from "@jest/globals";
import dfs from "./DFSOnBST";
import { tree } from "../tree";

test("DFS on BST", function () {
    expect(dfs(tree, 45)).toEqual(true);
    expect(dfs(tree, 7)).toEqual(true);
    expect(dfs(tree, 69)).toEqual(false);
});
