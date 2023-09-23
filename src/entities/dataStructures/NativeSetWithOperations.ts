import { ISetNativeOperations } from "../contracts";

export class NativeSetWithOperations<T> extends Set<T> implements ISetNativeOperations<T> {

    private constructor(elements?: Array<T>) {
        super(elements);
    }

    static create<T>(elements? : Array<T>): NativeSetWithOperations<T> {
        return new NativeSetWithOperations(elements)
    }

    union(otherSet: NativeSetWithOperations<T>):  NativeSetWithOperations<T> {
        const unionSet = new NativeSetWithOperations<T>([...this.values(), ...otherSet.values()])

        return unionSet
    }

    intersection(otherSet: NativeSetWithOperations<T>): NativeSetWithOperations<T> {
        const intersectionSet = new NativeSetWithOperations<T>()

        if (otherSet.size < this.size) {
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

    difference (otherSet: NativeSetWithOperations<T>): NativeSetWithOperations<T> {
        const differenceSet = new NativeSetWithOperations<T>()

        const values = this.values()

        for (const value of values) {
            if(!otherSet.has(value)) {
                differenceSet.add(value)
            }
        }

        return differenceSet
    }

    isSubsetOf (otherSet: NativeSetWithOperations<T>): boolean {
        if (this.size > otherSet.size) {
            return false
        }

        const values = this.values()

        for (const value of values) {
            if(!otherSet.has(value)) {
                return false
            }
        }

        return true
    }

    toList(): Array<T> {
        return Array.from(this.values())
    }

}
