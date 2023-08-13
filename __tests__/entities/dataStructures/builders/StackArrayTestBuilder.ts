import { StackArray } from "../../../../src/entities/dataStructures"

export class StackArrayTestBuilder<T> {

    private items: Array<T> = []

    private constructor() {}

    static aStackArray<T>(): StackArrayTestBuilder<T> {
        return new StackArrayTestBuilder<T>()
    }

    build(): StackArray<T> {
        const stack = new StackArray<T>() 
        this.items.forEach(item => stack.push(item))

        return stack
    }

    populate(element: T, numberOfElements?: number): StackArrayTestBuilder<T> {
        const length = numberOfElements || 10
        this.items = new Array(length)
        this.items.fill(element)
        return this
    }
}