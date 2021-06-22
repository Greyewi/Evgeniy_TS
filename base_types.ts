const integerNum: number = 22223
const doubleNum: number = 0.333
let doubleNumVar: number = 43432.4

// type string

let str: string = "Hello World!"

// type boolean

const isQuery: boolean = !!integerNum
const isData: boolean = false

const nothing: (null | object) = null

let something: any = (0 + '') || 333

//console.log(isQuery, isData, nothing, str + something)

// type array

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7]
const stringArray: string[] = ['h', 'e', 'l']

const numberGenArray: Array<number> = [7, 6, 5, 4, 3, 2, 1]
const constArr: number[] = new Array(1)

const matrixArray: number[][] = [[1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]]

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

//console.log(getError('error!'))

function printText(name: string): void {
    console.log(name)
}

//printText('Hello!')

function getText(name: string, age?: number): string {
    return name + age
}

// types

type Login = string
type Ids = (string | number)

let login = 'root' as Login
let id = <Ids>23424234

// objects, interfaces

interface IHuman {
    readonly id: Ids,
    name: Login,
    age: number,
    vaccination: boolean,
    family?: {
        son: {
            name: Login,
            age: number
        }
    }
}

interface IPerson extends IHuman {
    gender: string,
    setData?: (id: Ids, name: Login, age: number, vaccination: boolean, gender: string) => void
}

const man: IPerson = {
    id: 2342,
    name: "Robb",
    age: 22,
    vaccination: true,
    gender: "male",
    setData(id, name, age, vaccination, gender): void {
        this.id = id
        this.name = name
        this.age = age
        this.vaccination = vaccination
        this.gender = gender
    }
}

console.log(man)
const women: IPerson = {
    id: 0, name: '', age: 0, vaccination: false, gender: '', setData(id, name, age, vaccination, gender): void {
        this.id = id
        this.name = name
        this.age = age
        this.vaccination = vaccination
        this.gender = gender
    }
}

women.setData(1111, "Jess", 33, false, 'female')
console.log(women, man)


interface IStyles {
    [property: string]: string
}

const boxStyle: IStyles = {
    margin: '5px',
    background: '#666'
}

interface IWork {
    title: string,
    path: string,
    imgSrc: string,
    altText: () => string,
    description: string
}

interface IWorkList {
    [property: string]: IWork
}

const workList: IWorkList = {
    agilePdu: {
        title: 'Agile-PDU online store',
        path: '/agile-pdu',
        imgSrc: "agilePduImg",
        altText() {
            return this.title + ' Image'
        },
        description: "projectDescription.agilePdu",
    },
    portfolio: {
        title: 'My Portfolio Website',
        path: '/portfolio',
        imgSrc: "portfolioImg",
        altText() {
            return this.title + ' Image'
        },
        description: "projectDescription.agilePdu",
    }
}

console.log(boxStyle, workList)


// overload functions

function getSelectors(property: string, value: string): IStyles
function getSelectors(property: string): string
function getSelectors(): IStyles

function getSelectors(property?: string, value?: string) {
    if(property && value) {
        boxStyle[property] = value
        return boxStyle
    } else if(property && !value) {
        return boxStyle[property]
    } else {
        return boxStyle
    }
}

console.log(getSelectors())
console.log(getSelectors('color', 'blue'))
console.log(getSelectors('color'))


// Generics

const genArr: Array<string> = ["dad", "fsfds"]

function arrReverse<T>(array: T[]): T[] {
    return array.reverse()
}

console.log(arrReverse([1,2,3,4,5,6, "rwer"]))

function arrJoin<T>(array: T[], mod?: string): string {
    return array.join(mod)
}

console.log(arrJoin([1,2,3,4,5,6, "rwer"], ''))


interface ICar<T,A,B> {
    body: T,
    engine: T,
    inject: T,
    maxPit: A,
    boxAT: B
}

const car: ICar<string, number, boolean> = {
    body: "sedan",
    engine: "v8",
    inject: 'turbo',
    maxPit: 200,
    boxAT: true
}

console.log(car)