import { StackArray, StackObject } from "../../../src/entities/dataStructures"
import { BinaryConverter } from "../../../src/problems/stacks"

describe('Decimal to binary converter', () => {
        const stackArray = new StackArray<number>()
        const stackObject = new StackObject<number>()
        const stackArrayBinaryConverter = new BinaryConverter(stackArray)
        const stackObjectBinaryConverter = new BinaryConverter(stackObject)

    describe('Stack array', () => {
        it('Should receive 2 and return its binary value', () => {
            const binary2 = stackArrayBinaryConverter.convert(2)

            expect(binary2).toEqual('0b10')
        })
        it('Should receive 4 and return its binary value', () => {
            const binary4 = stackArrayBinaryConverter.convert(4)

            expect(binary4).toEqual('0b100')
        })
        it('Should receive 10 and return its binary value', () => {
            const binary10 = stackArrayBinaryConverter.convert(10)

            expect(binary10).toEqual('0b1010')
        })
        it('Should receive 1111 and return its binary value', () => {
            const binary1111 = stackArrayBinaryConverter.convert(1111)
            expect(binary1111).toEqual('0b10001010111')
        })
    })
    describe('Stack object', () => {
        it('Should receive 2 and return its binary value', () => {
            const binary2 = stackObjectBinaryConverter.convert(2)

            expect(binary2).toEqual('0b10')
        })
        it('Should receive 4 and return its binary value', () => {
            const binary4 = stackObjectBinaryConverter.convert(4)

            expect(binary4).toEqual('0b100')
        })
        it('Should receive 10 and return its binary value', () => {
            const binary10 = stackObjectBinaryConverter.convert(10)

            expect(binary10).toEqual('0b1010')
        })
        it('Should receive 1111 and return its binary value', () => {
            const binary1111 = stackObjectBinaryConverter.convert(1111)
            expect(binary1111).toEqual('0b10001010111')
        })
    })
})