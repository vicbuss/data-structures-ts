export class StackArray<T> {
    private items: Array<T> = []

    push(element: T): void {
        this.items.push(element)
    }

    pop(): T | undefined {
        return this.items.pop()
    }

    peek(): T {
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

}