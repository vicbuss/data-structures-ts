import { StackObject } from "../../../src/entities/dataStructures"
import { StackObjectTestBuilder } from "./builders/StackObjectTestBuilder"

describe('Stack Array', () => {
    let stack: StackObject<string>
    let emptyStack: StackObject<string>

    beforeEach(() => {
        stack = StackObjectTestBuilder.aStackObject<string>().populate('item', 10).build() 
        emptyStack = StackObjectTestBuilder.aStackObject<string>().build()
    })

    describe('Method isEmpty', () => {
        it('Should return true if array is empty',  () => {

            const isEmptyStack = emptyStack.isEmpty()

            expect(isEmptyStack).toBeTruthy()
        })
        it('Should return false if array is not empty', () => {

            const isEmptyStack = stack.isEmpty()

            expect(isEmptyStack).not.toBeTruthy()
        })
    })

    describe('Method size', () => {
        it('Should return undefined if stack is empty', () => {

            expect(emptyStack.size()).toBeFalsy()
        })

        it('Should return the length of the stack array', () => {

            expect(stack.size()).toBe(10)
        })
    })

    describe('Method peek', () => {
        it('Should return the element on the top of the stack', () => {

            const item = stack.peek()

            expect(item).toBe('item')
            expect(stack.size()).toBe(10)
        })

        it('Should return undefined if the stack is empty', () => {

            const item = emptyStack.peek()

            expect(item).toBe(undefined)
        })
    })

    describe('Method push', () => {
        it('Should add an element to the top of the stack', () => {

            const item = 'item'

            emptyStack.push(item)

            expect(stack.peek()).toBe(item)
        })
    })

    describe('Method pop', () => {
        it('Should remove the element on the top of the stack and return it', () => {
            const item = stack.pop()

            expect(stack.size()).toBe(9)
            expect(item).toEqual('item')
        })
        it('Should return undefined if the stack is empty', () => {
            const item = emptyStack.pop()

            expect(item).toBe(undefined)
        })
    })

    describe('Method clear', () => {
        it('Should remove all elements from the stack', () => {
            stack.clear()

            expect(stack.size()).toBe(0)
        })
    })

    describe('Method toString', () => {
        it('Should return a string listing stack objects', () => {
            const stackString = stack.toString()
            expect(stackString).toEqual('item,item,item,item,item,item,item,item,item,item')
        })
        it('Should return an empty strig if stack contains no elements', () => {
            const stackString = emptyStack.toString()
            expect(stackString).toEqual('')
        })
    })

})