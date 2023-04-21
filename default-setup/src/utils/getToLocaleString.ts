export const getToLocaleString = (date: string): string => {
    return date ? new Date(date).toLocaleString('ko-KR') : ''
}