var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var sayHelloWorld = new Promise(function (resolve, reject) {
    resolve("Hello world!");
});
var checkBoolean = function (boolean) {
    return new Promise(function (resolve, reject) {
        if (boolean) {
            resolve(boolean);
        }
        else {
            reject("Input is false :(");
        }
    });
};
var returnObj = new Promise(function (resolve, reject) {
    resolve({
        x: "meow",
        y: 45,
    });
});
var promisesArray = [
    sayHelloWorld,
    checkBoolean,
    returnObj,
];
var convertToObj = function (array) {
    var obj = {};
    var temp = array.map(function (item) { return item; });
    obj = __assign({}, temp);
    return obj;
};
console.log(convertToObj(promisesArray));
