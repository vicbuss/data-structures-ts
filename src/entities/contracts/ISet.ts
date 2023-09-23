export type Literal = number | string | symbol

export interface ISet<T extends Literal> {
    add: (element : T) => boolean
    delete: (element: T) => boolean
    has: (element: T) => boolean
    clear: () => void
    size: () => number
    values: () => Array<T>
}

export interface ISetOperations<T extends Literal> {
    union: (otherSet: ISet<T>) => ISet<T>
    intersection: (otherSet: ISet<T>) => ISet<T>
    difference: (otherSet: ISet<T>) => ISet<T>
    isSubsetOf: (otherSet: ISet<T>) => boolean
}

export interface ISetNativeOperations<T> {
    union: (otherSet: Set<T>) => Set<T>
}
