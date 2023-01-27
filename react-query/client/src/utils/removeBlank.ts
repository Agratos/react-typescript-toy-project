const removeBlank = (text: string):string => {
    return text.replace(/(\s*)/g, "");
}

export default removeBlank;