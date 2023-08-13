import { IStack } from "../contracts"

export class StackObject<T> implements IStack<T>{
    private items: {[key: number]: T} = {}
    private count: number = 0


    push(element: T): void {
        this.items[this.count] = element
        this.count++
    }

    pop(): T | undefined {
        const topElement = this.items[this.count - 1]
        delete this.items[this.count - 1]

        if (this.count >= 0) {
            this.count--
        } 

        return topElement
    }

    peek(): T | undefined {
        return this.items[this.count -1]
    } 

    isEmpty(): boolean {
        return (!this.count)
    }

    clear(): void {
        this.items = {}
        this.count = 0
    }

    size(): number {
        return this.count
    }

    toString(): string {
        if(!this.items[0]) return ''

        let itemString = `${this.items[0]}`

        for(let i = 1; i < this.count; i++) {
            itemString = `${itemString},${this.items[i]}`
        }

        return itemString 
    }
    
    
}