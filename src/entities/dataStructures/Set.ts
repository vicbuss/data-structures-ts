import { ISet, Literal } from "../contracts";

export class Set<T extends Literal> implements ISet<T> {
    private items: {[key: Literal]: T}

    constructor(elements?: Array<T>) {
        this.items = {}

        elements?.forEach(element => {
            if (!Object.prototype.hasOwnProperty.call(this.items, element)) {
                this.items[element] = element
            }
        })
    }

    add(element: T): boolean {
        if (!this.has(element)) {
            this.items[element] = element

            return true
        }
        return false
    }

    delete(element: T): boolean {
        if (this.has(element)) {
            delete this.items[element]

            return true
        }

        return false
    }

    has(element: T): boolean {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    clear(): void {
        this.items = {}
    }

    size(): number {
        return Object.keys(this.items).length
    }

    values(): T[] {
        return Object.values(this.items)
    }
}