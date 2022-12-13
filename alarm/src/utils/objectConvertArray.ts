interface IArray {
    [index:string]: any
}

/** 객체를 배열로 변경 */
const objectConvertArray = (array:IArray) => {
    const temp = Object.keys(array).map((key) => [String(key), String(array[key])]);
    return temp;
}

export default objectConvertArray;