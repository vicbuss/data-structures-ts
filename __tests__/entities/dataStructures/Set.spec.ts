import { Set } from "../../../src/entities/dataStructures"

describe('Set', () => {
    describe('Basic methods', () => {
        describe('Method has', () => {
            it('Should return false if element is not in Set', () => {
                let set = new Set<number>()

                const has = set.has(1)

                expect(has).toBeFalsy()
            })

            it('Should return true is element is in Set', () => {
                let set = new Set<number>([1])

                const has = set.has(1)

                expect(has).toBeTruthy()

            })
        })
        describe('Method add', () => {
            it('Should add element if it is not already in Set and return true', () => {
                let set = new Set<number>()

                const added = set.add(1)

                expect(added).toBeTruthy()
                expect(set.has(1)).toBeTruthy()
            })

            it('Should not add element that is already in Set and return false', () => {
                let set = new Set<number>([1])
                
                const added = set.add(1)

                expect(added).toBeFalsy()
                expect(set.has(1)).toBeTruthy()

            })
        })

        describe('Method delete', () => {
            it('Should delete an element if it is in Set and return true', () => {
            let set = new Set<number>()

            set.add(1)

            const deleted = set.delete(1)

            expect(deleted).toBeTruthy()
            expect(set.has(1)).toBeFalsy()
            })
            it('Should return false if element to be deleted is not in Set', () => {
            let set = new Set<number>()

            const deleted = set.delete(1)

            expect(deleted).toBeFalsy()
            expect(set.has(1)).toBeFalsy()
            })
        })

        describe('Method size', () => {
            it('Should return 0 if Set is empty', () => {
                let set = new Set<number>()

                const size = set.size()

                expect(size).toEqual(0)
            })

            it('Should return the size of the set', () => {
                let set1 = new Set<number>([1, 2, 3, 4, 5, 6])

                set1.add(1)

                const size1 = set1.size()

                let set2 = new Set<number>()

                set2.add(1)
                set2.add(2)
                set2.add(3)
                set2.add(4)
                set2.add(5)
                set2.add(6)
                set2.add(1)

                const size2 = set2.size()

                expect(size1).toEqual(6)
                expect(size2).toEqual(6)

            })
        })

        describe('Method clear', () => {
            it('Should remove all elements from Set', () => {
                let set = new Set<number>([1, 2, 3, 4, 5, 6])

                set.clear()

                const size = set.size()

                expect(size).toBe(0)
            })
        })

        describe('Method values', () => {
            it('Should return an array of Set elements', () => {
                let set = new Set<number>([1, 2, 3, 4, 5, 6])

                const values = set.values()

                expect(values).toEqual([1, 2, 3, 4, 5, 6])
            })
        })
    })
    describe('Set operations', () => {
        describe('Union operation', () => {
            it('It should return a union set of sets A and B', () => {
                const setA = new Set<number>([1, 2, 3])
                const setB = new Set<number>([1, 2, 3, 4, 5])

                const unionSet = setA.union(setB)

                expect(unionSet.values()).toEqual([1, 2, 3, 4, 5])
            } )
        })
        describe('Intersection operation', () => {
            it('Should return an intersection set of sets A and B', () => {
                const setA = new Set<number>([1, 2, 3])
                const setB = new Set<number>([1, 2, 3, 4, 5])

                const intersectionSet = setA.intersection(setB)

                expect(intersectionSet.values()).toEqual([1, 2, 3])
            })
        })
        describe('Difference operation', () => {
            it('Should return a set with the elements present in set A, but absent in set B', () => {
                const setA = new Set<number>([1, 2, 3])
                const setB = new Set<number>([1, 2, 3, 4, 5])

                const differenceAB = setA.difference(setB)

                const differenceBA = setB.difference(setA) 

                expect(differenceAB.values()).toEqual([])

                expect(differenceBA.values()).toEqual([4, 5])
            })
        })
        describe('Is subset operation', () => {
            it('Should return true if set A is a subset of set B', () => {
                const setA = new Set<number>([1, 2, 3])
                const setB = new Set<number>([1, 2, 3, 4, 5])

                const isSubset = setA.isSubsetOf(setB)

                expect(isSubset).toBeTruthy()
            })
            it('Should return false if set A is larger than set B', () => {
                const setB = new Set<number>([1, 2, 3])
                const setA = new Set<number>([1, 2, 3, 4, 5])
                
                const isSubset = setA.isSubsetOf(setB)

                expect(isSubset).toBeFalsy()

            })
            it('Should return false is set A is not a subset of set B', () => {
                const setA = new Set<number>([4, 5, 6])
                const setB = new Set<number>([1, 2, 3, 4, 5])

                const isSubset = setA.isSubsetOf(setB)

                expect(isSubset).toBeFalsy()
            })
        })

    })
})
