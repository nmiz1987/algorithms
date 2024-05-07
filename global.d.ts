declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

declare type ListNode<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
