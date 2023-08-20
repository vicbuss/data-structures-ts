import { IQueue } from "../contracts";

export class Queue<T> implements IQueue<T> {
    private items: {[key: number]: T} = [] 
    private count: number = 0
    private lowestIndex: number = 0

    enqueue (element: T): void {
        this.items[this.count] = element
        this.count++
    }

    dequeue (): T | undefined {
        if(this.isEmpty()) {
            return undefined
        }

        const dequeuedElement = this.items[this.lowestIndex]
        delete this.items[this.lowestIndex]

        this.lowestIndex++
        this.count--

        return dequeuedElement
    }

    peek (): T | undefined {
        if(this.isEmpty()) {
            return undefined
        }

        const firstElement = this.items[this.lowestIndex]
        return firstElement
    }

    isEmpty (): boolean {
        return (!this.count)
    }

    size (): number {
        return this.count
    }

    clear () : void {
        this.items = {}
        this.count = 0
        this.lowestIndex = 0
    }

    toString () : string {
        if(this.isEmpty()) {
            return ''
        }
        let stringQueue = `${this.items[0]}`

        for(let i = 1; i < this.count; i++) {
            stringQueue = `${stringQueue},${this.items[i]}`
        }

        return stringQueue
    }

}