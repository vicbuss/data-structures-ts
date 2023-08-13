import { IStack } from "../contracts"

export class StackArray<T> implements IStack<T>{
    private items: Array<T> = []

    push(element: T): void {
        this.items.push(element)
    }

    pop(): T | undefined {
        return this.items.pop()
    }

    peek(): T | undefined {
        return this.items[this.items.length -1]
    }

    isEmpty(): boolean {
        return (!this.items.length)
    }

    clear(): void {
        this.items = []
    }

    size(): number {
        return this.items.length
    }

    toString(): string {
        return this.items.toString()
    }

}