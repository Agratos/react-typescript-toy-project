/** 공백 제거 함수 */
const removeBlank = (text: string):string => {
    return text.replace(/(\s*)/g, "");
}

export default removeBlank;