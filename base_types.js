var integerNum = 22223;
var doubleNum = 0.333;
var doubleNumVar = 43432.4;
// type string
var str = "Hello World!";
// type boolean
var isQuery = !!integerNum;
var isData = false;
var nothing = null;
var something = (0 + '') || 333;
//console.log(isQuery, isData, nothing, str + something)
// type array
var numberArray = [1, 2, 3, 4, 5, 6, 7];
var stringArray = ['h', 'e', 'l'];
var numberGenArray = [7, 6, 5, 4, 3, 2, 1];
var constArr = new Array(1);
var matrixArray = [[1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]];
//console.log(numberArray, stringArray, constArr, matrixArray)
var tupleArray = [4343, 434, something];
//console.log(tupleArray)
var tupleMixArray = [4343, 434, str];
// Enums перечисления
var Hey;
(function (Hey) {
    Hey[Hey["q"] = 0] = "q";
    Hey[Hey["w"] = 1] = "w";
    Hey[Hey["e"] = 2] = "e";
    Hey[Hey["r"] = 3] = "r";
    Hey[Hey["t"] = 4] = "t";
    Hey[Hey["y"] = 5] = "y";
})(Hey || (Hey = {}));
//console.log(typeof Hey['3'], typeof Hey.r)
var Actions;
(function (Actions) {
    Actions["RUN"] = "run";
    Actions["HIDE"] = "hide";
    Actions["STAND"] = "stand";
    Actions["SIT"] = "sit";
})(Actions || (Actions = {}));
//console.log(Actions, Actions['run'], Hey)
// functions
//console.log(getText('World! ', 32))
function getError(err) {
    throw new Error(err);
}
//console.log(getError('error!'))
function printText(name) {
    console.log(name);
}
//printText('Hello!')
function getText(name, age) {
    return name + age;
}
var login = 'root';
var id = 23424234;
var man = {
    id: 2342,
    name: "Robb",
    age: 22,
    vaccination: true,
    gender: "male",
    setData: function (id, name, age, vaccination, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.vaccination = vaccination;
        this.gender = gender;
    }
};
console.log(man);
var women = {
    id: 0, name: '', age: 0, vaccination: false, gender: '',
    setData: function (id, name, age, vaccination, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.vaccination = vaccination;
        this.gender = gender;
    }
};
women.setData(1111, "Jess", 33, false, 'female');
console.log(women, man);
var boxStyle = {
    margin: '5px',
    background: '#666'
};
var workList = {
    agilePdu: {
        title: 'Agile-PDU online store',
        path: '/agile-pdu',
        imgSrc: "agilePduImg",
        altText: function () {
            return this.title + ' Image';
        },
        description: "projectDescription.agilePdu"
    },
    portfolio: {
        title: 'My Portfolio Website',
        path: '/portfolio',
        imgSrc: "portfolioImg",
        altText: function () {
            return this.title + ' Image';
        },
        description: "projectDescription.agilePdu"
    }
};
console.log(boxStyle, workList);
function getSelectors(property, value) {
    if (property && value) {
        boxStyle[property] = value;
        return boxStyle;
    }
    else if (property && !value) {
        return boxStyle[property];
    }
    else {
        return boxStyle;
    }
}
console.log(getSelectors());
console.log(getSelectors('color', 'blue'));
console.log(getSelectors('color'));
// Generics
var genArr = ["dad", "fsfds"];
function arrReverse(array) {
    return array.reverse();
}
console.log(arrReverse([1, 2, 3, 4, 5, 6, "rwer"]));
function arrJoin(array, mod) {
    return array.join(mod);
}
console.log(arrJoin([1, 2, 3, 4, 5, 6, "rwer"], ''));
