declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

declare type ListNode<T> = {
    value: T;
    prev?: ListNode<T>;
    next?: ListNode<T>;
};

declare type Point = {
    x: number;
    y: number;
};

declare type CompleteGraphEdge = { from: number; to: number; weight: number };
declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][]; // A number means weight
