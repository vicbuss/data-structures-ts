import { ISet, ISetOperations, Literal } from "../contracts";

export class Set<T extends Literal> implements ISet<T>, ISetOperations<T> {
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

    union(otherSet: ISet<T>): ISet<T> {
        const unionSet = new Set<T>()

        let values = this.values()

        for (const value of values) {
            unionSet.add(value)
        }

        values = otherSet.values()

        for (const value of values) {
            unionSet.add(value)
        }

        return unionSet
    }

    intersection(otherSet: ISet<T>): ISet<T> {
        const intersectionSet = new Set<T>()

        if (otherSet.size() < this.size()) {
           for (const value of otherSet.values()) {
                if(this.has(value)) {
                    intersectionSet.add(value)
                }
           } 
        } else {
            for (const value of this.values()) {
                if(otherSet.has(value)) {
                    intersectionSet.add(value)
                }
            }
        }

        return intersectionSet
    }

    difference(otherSet: ISet<T>): ISet<T> {
        const differenceSet = new Set<T>()

        const values = this.values()

        for (const value of values) {
            if(!otherSet.has(value)) {
                differenceSet.add(value)
            }
        }

        return differenceSet
    }

    isSubsetOf(otherSet: ISet<T>): boolean {
        if (this.size() > otherSet.size()) {
            return false
        }

        const values = this.values()
        
        for (const value of values) {
            if (!otherSet.has(value)) {
                return false
            }
        }

        return true
    }
}