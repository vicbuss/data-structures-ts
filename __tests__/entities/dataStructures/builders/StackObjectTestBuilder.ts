import { StackObject } from "../../../../src/entities/dataStructures"

export class StackObjectTestBuilder<T> {

    private items: {[key: number]: T} = {}

    static aStackObject<T>() {
        return new StackObjectTestBuilder<T>()
    }

    build(): StackObject<T> {
        const stack = new StackObject<T>()
        for(const index in this.items) {
            const item = this.items[index]
            stack.push(item)
        }
        return stack
    }

    populate(element: T, numberOfElements?: number): StackObjectTestBuilder<T> {
        const size = numberOfElements || 10
        for (let i = 0; i < size; i++) {
            this.items[i] = element
        }

        return this
    }

}