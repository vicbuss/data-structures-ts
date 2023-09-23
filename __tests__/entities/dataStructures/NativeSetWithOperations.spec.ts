import { NativeSetWithOperations } from "../../../src/entities/dataStructures/NativeSetWithOperations"

describe('Native Set With Operations', () => {
    describe('Basic Methods', () => {
        describe('Method has', () => {
            it('Should return false if element is not in Set', () => {
                let set: NativeSetWithOperations<number> = NativeSetWithOperations.create()

                const has = set.has(1)

                expect(has).toBeFalsy()
            })

            it('Should return true if element is in Set', () => {
                let set = NativeSetWithOperations.create([1])

                const has = set.has(1)

                expect(has).toBeTruthy()

            })
        })

        describe('Method add', () => {
            it('Should add element if it is not already in Set', () => {
                let set: NativeSetWithOperations<number> = NativeSetWithOperations.create()

                set.add(1)
                expect(set.has(1)).toBeTruthy()
            })

            it('Should not add element that is already in Set', () => {
                let set = NativeSetWithOperations.create([1])

                expect(set.has(1)).toBeTruthy()
                expect(set.size).toEqual(1)

            })
        })

        describe('Method delete', () => {
            it('Should delete an element if it is in Set and return true', () => {
            let set: NativeSetWithOperations<number> = NativeSetWithOperations.create()

            set.add(1)

            const deleted = set.delete(1)

            expect(deleted).toBeTruthy()
            expect(set.has(1)).toBeFalsy()
            })

            it('Should return false if element to be deleted is not in Set', () => {
            let set: NativeSetWithOperations<number> = NativeSetWithOperations.create()

            const deleted = set.delete(1)

            expect(deleted).toBeFalsy()
            expect(set.has(1)).toBeFalsy()
            })
        })

        describe('Size property', () => {
            it('Should return 0 if Set is empty', () => {
                let set = NativeSetWithOperations.create()

                const size = set.size

                expect(size).toEqual(0)
            })

            it('Should return the size of the set', () => {
                let set1 = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                set1.add(1)

                const size1 = set1.size

                let set2 = NativeSetWithOperations.create()

                set2.add(1)
                set2.add(2)
                set2.add(3)
                set2.add(4)
                set2.add(5)
                set2.add(1)

                const size2 = set2.size

                expect(size1).toEqual(5)
                expect(size2).toEqual(5)

            })
        })

        describe('Method clear', () => {
            it('Should remove all elements from Set', () => {
                let set = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                set.clear()

                const size = set.size

                expect(size).toBe(0)
            })
        })
        describe('MEthod toList', () => {
            it('Should return an array of Set elements', () => {
                let set = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                expect(set.toList()).toEqual([1, 2, 3, 4, 5])
            })
        })
    })
    describe('Set Operations', () => {
        describe('Union operation', () => {
            it('It should return a union set of sets A and B', () => {
                const setA = NativeSetWithOperations.create([1, 2, 3])
                const setB = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                const unionSet = setA.union(setB)

                expect(unionSet.toList()).toEqual([1, 2, 3, 4, 5])
            })
        })
    
        describe('Intersection operation', () => {
            it('Should return an intersection set of sets A and B', () => {
                const setA = NativeSetWithOperations.create([1, 2, 3])
                const setB = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                const intersectionSet = setA.intersection(setB)

                expect(intersectionSet.toList()).toEqual([1, 2, 3])
            })
        })
        describe('Difference operation', () => {
            it('Should return a set with the elements present in set A, but absent in set B', () => {
                const setA = NativeSetWithOperations.create([1, 2, 3])
                const setB = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                const differenceAB = setA.difference(setB)

                const differenceBA = setB.difference(setA) 

                expect(differenceAB.toList()).toEqual([])

                expect(differenceBA.toList()).toEqual([4, 5])
            })
        })
        describe('Is subset operation', () => {
            it('Should return true if set A is a subset of set B', () => {
                const setA = NativeSetWithOperations.create([1, 2, 3])
                const setB = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                const isSubset = setA.isSubsetOf(setB)

                expect(isSubset).toBeTruthy()
            })
            it('Should return false if set A is larger than set B', () => {
                const setB = NativeSetWithOperations.create([1, 2, 3])
                const setA = NativeSetWithOperations.create([1, 2, 3, 4, 5])
                
                const isSubset = setA.isSubsetOf(setB)

                expect(isSubset).toBeFalsy()

            })
            it('Should return false is set A is not a subset of set B', () => {
                const setA = NativeSetWithOperations.create([4, 5, 6])
                const setB = NativeSetWithOperations.create([1, 2, 3, 4, 5])

                const isSubset = setA.isSubsetOf(setB)

                expect(isSubset).toBeFalsy()
            })
        })
    })
})