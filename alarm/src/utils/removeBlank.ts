/** string 모든 빈칸 제외 */
const removeBlank = (text: string):string => {
    return text.replace(/(\s*)/g, "");
}

export default removeBlank;