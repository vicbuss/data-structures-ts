export type Literal = number | string | symbol

export interface ISet<T extends Literal> {
    add: (element : T) => boolean
    delete: (element: T) => boolean
    has: (element: T) => boolean
    clear: () => void
    size: () => number
    values: () => Array<T>
}