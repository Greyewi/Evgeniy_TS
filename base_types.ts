const integerNum: number = 22223
const doubleNum: number = 0.333
let doubleNumVar: number = 43432.4

// type string

let str: string = "Hello World!"

// type boolean

const isQuery: boolean = !!integerNum
const isData: boolean = false

const nothing: (null | object) = null

let something:any = (0 + '') || 333

//console.log(isQuery, isData, nothing, str + something)

// type array

const numberArray: number[] = [1,2,3,4,5,6,7]
const stringArray: string[] = ['h','e','l']

const numberGenArray: Array<number> = [7,6,5,4,3,2,1]
const constArr: number[] = new Array(1)

const matrixArray: number[][] = [[1,2,3,4,5,6,7], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7]]

//console.log(numberArray, stringArray, constArr, matrixArray)

const tupleArray: [number, number, number] = [4343, 434, something]

//console.log(tupleArray)

const tupleMixArray: [number, number, (number | string)] = [4343, 434, str]

// Enums перечисления

enum Hey {
    q,
    w,
    e,
    r,
    t,
    y,
}

//console.log(typeof Hey['3'], typeof Hey.r)

enum Actions {
    RUN = 'run',
    HIDE = 'hide',
    STAND = 'stand',
    SIT = 'sit'
}

//console.log(Actions, Actions['run'], Hey)

// functions

//console.log(getText('World! ', 32))

function getError(err: string): never {
    throw new Error(err)
}

console.log(getError('error!'))

function printText(name: string): void{
    console.log(name)
}

printText('Hello!')

function getText(name: string, age?: number): string{
    return name + age
}