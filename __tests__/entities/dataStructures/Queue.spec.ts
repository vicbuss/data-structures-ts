import { Queue } from "../../../src/entities/dataStructures"
import { QueueTestBuilder } from "./builders"

describe('Queue', () => {
    let emptyQueue: Queue<string>
    let queue: Queue<string>

    beforeEach(() => {
        emptyQueue = QueueTestBuilder.aQueue<string>().build()
        queue = QueueTestBuilder.aQueue<string>().populate('item').build()
    

    }) 
 
    describe('Method size', () => {
        it('Should return zero if queue is empty', () => {

            expect(emptyQueue.size()).toBe(0)
        })

        it('Should return the length of the queue', () => {

            expect(queue.size()).toBe(10)
        })
    })
    describe('Method peek', () => {
        it('Should return the element on the beggining of the queue', () => {

            const item = queue.peek()

            expect(item).toBe('item')
            expect(queue.size()).toBe(10)
        })

        it('Should return undefined if the queue is empty', () => {

            const item = emptyQueue.peek()

            expect(item).toBe(undefined)
        })
    })
    describe('Method isEmpty', () => {
        it('Should return true if queue is empty', () => {
            const isEmptyQueue = emptyQueue.isEmpty()

            expect(isEmptyQueue).toBeTruthy()
        })
        it('Should return false if queue is not empty', () => {
            const isEmptyQueue = queue.isEmpty()

            expect(isEmptyQueue).toBeFalsy()
        })
    })
   describe('Method enqueue', () => {
        it('Should insert an element to the end of the queue', () => {
            const element = 'element'
            emptyQueue.enqueue(element)

            expect(emptyQueue.peek()).toEqual(element)
        })
    })
    describe('Method dequeue', () => {
        it('Should remove the element at the beginning of the queue', () => {
            const element = 'element'
            emptyQueue.enqueue(element)

            const newElement = 'newElement'
            emptyQueue.enqueue(newElement)

            const dequeuedElement = emptyQueue.dequeue()

            expect(dequeuedElement).toEqual(element)
        })
        it('Should return undefined if the stack is empty', () => {
            const dequeuedElement = emptyQueue.dequeue()

            expect(dequeuedElement).toBe(undefined)
        })
    })
    describe('Method clear', () => {
        it('Should remove all elements from the queue', () => {
            queue.clear()
            expect(queue.size()).toBe(0)
        })
    })
    describe('Method toString', () => {
        it('Should return the queue in a string format', () => {
            emptyQueue.enqueue('one')
            emptyQueue.enqueue('two')
            emptyQueue.enqueue('three')

            const stringQueue = emptyQueue.toString()

            expect(stringQueue).toEqual('one,two,three')
        })
    })
})