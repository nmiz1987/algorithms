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
