
const getGradeColor = (value: number | string):string => {
    const num = Number(value);
    if(num > 70){
        return `#92d050`
    }else if(num > 40){
        return `#ffc000`
    }else {
        return `#ff0000`
    }
}

export default getGradeColor;