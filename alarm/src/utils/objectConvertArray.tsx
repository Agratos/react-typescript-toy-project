interface IArray {
    [index:string]: any
}

const objectConvertArray = (array:IArray) => {
    console.log(`222`, array);

    const temp = Object.keys(array).map((key) => [String(key), String(array[key])]);
    return temp;
}

export default objectConvertArray;