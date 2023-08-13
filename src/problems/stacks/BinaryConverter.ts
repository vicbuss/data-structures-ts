import { IStack } from "../../entities/contracts";

export class BinaryConverter {
    constructor(private stack: IStack<number>) {}

    convert(decimalNumber: number) {
        let number = decimalNumber
        let binaryString = '0b'

        while(number > 0) {
            let remainder = number % 2
    
            this.stack.push(remainder)
    
            number = Math.floor(number / 2)
        }

        while(this.stack.size() > 0){
            binaryString = `${binaryString}${this.stack.pop()}`
        }
        
        this.stack.clear()

        return binaryString     
    }
}