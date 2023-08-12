import { StackArray } from "../../../src/entities/dataStructures"

class StackArrayTestBuilder<T> {

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

describe('Stack Array', () => {
    describe('Method isEmpty', () => {
        it('Should return true if array is empty',  () => {

            const stack = StackArrayTestBuilder.aStackArray().build()

            const isEmptyStack = stack.isEmpty()

            expect(isEmptyStack).toBeTruthy()
        })
        it('Should return false if array is not empty', () => {
            const stack = StackArrayTestBuilder.aStackArray().populate('item').build()

            const isEmptyStack = stack.isEmpty()

            expect(isEmptyStack).not.toBeTruthy()
        })
    })
    describe('Method size', () => {
        it('Should return undefined if stack is empty', () => {
            const stack = StackArrayTestBuilder.aStackArray().build()

            expect(stack.size()).toBeFalsy()
        })

        it('Should return the length of the stack array', () => {
            const stack = StackArrayTestBuilder.aStackArray().populate('item', 10).build()

            expect(stack.size()).toBe(10)
        })
    })
    describe('Method peek', () => {
        it('Should return the element on the top of the stack', () => {
            const stack = StackArrayTestBuilder.aStackArray().populate('item', 10).build()

            const item = stack.peek()

            expect(item).toBe('item')
            expect(stack.size()).toBe(10)
        })
    })
    describe('Method push', () => {
        it('Should add an element to the top of the stack', () => {
            const stack = StackArrayTestBuilder.aStackArray().build()

            const item = 'item'

            stack.push(item)

            expect(stack.peek()).toBe(item)
        })
    })
    describe('Method pop', () => {
        it('Should remove the element on the top of the stack and return it', () => {
            const stack = StackArrayTestBuilder.aStackArray().populate('item', 10).build()

            const item = stack.pop()

            expect(stack.size()).toBe(9)
            expect(item).toEqual('item')
        })
    })

})