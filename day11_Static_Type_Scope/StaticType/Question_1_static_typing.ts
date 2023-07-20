interface Promises {
  [key: string]: () => Promise<any>
}

interface MyObject {
  x: string;
  y: number;
}

const sayHelloWorld: Promise<string> = new Promise((resolve, reject) => {
  resolve("Hello world!");
});

const checkBoolean: (boolean: boolean) => Promise<boolean> = (boolean) =>
  new Promise((resolve, reject) => {
    if (boolean) {
      resolve(boolean);
    } else {
      reject(`Input is false :(`);
    }
  });

const returnObj: Promise<MyObject> = new Promise((resolve, reject) => {
  resolve({
    x: "meow",
    y: 45,
  });
});

const promisesArray: Array<Promise<any> | ((boolean: boolean) => Promise<any>)> = [
  sayHelloWorld,
  checkBoolean,
  returnObj,
];

const convertToObj = (array: Array<Promise<any> | ((boolean: boolean) => Promise<any>)>): Promises => {
  let obj: Promises | any = {};
  let temp = array.map((item) => item);
  obj = { ...temp };
  return obj;
};

console.log(convertToObj(promisesArray));
