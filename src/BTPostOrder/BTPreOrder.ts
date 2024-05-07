function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    //pre

    //recurse
    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value);

    //post

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    return walk(head, path);
}
