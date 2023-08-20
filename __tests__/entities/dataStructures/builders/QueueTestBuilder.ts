import { Queue } from "../../../../src/entities/dataStructures"

export class QueueTestBuilder<T> {
    private items: {[key: number] : T} = {}

    static aQueue<T>() {
        return new QueueTestBuilder<T>()
    }

    build(): Queue<T> {
        const queue = new Queue<T>()
        for(const index in this.items) {
            const item = this.items[index]
            queue.enqueue(item)
        }
        return queue
    }

    populate(element: T, numberOfElements?: number): QueueTestBuilder<T> {
        const size = numberOfElements || 10
        for (let i = 0; i < size; i++) {
            this.items[i] = element
        }

        return this

    }
}