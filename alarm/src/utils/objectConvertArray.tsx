interface IArray {
    [index:string]: any
}

const objectConvertArray = (array:IArray) => {
    const temp = Object.keys(array).map((key) => [String(key), String(array[key])]);
    return temp;
}

export default objectConvertArray;