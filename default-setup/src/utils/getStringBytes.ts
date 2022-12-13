/** 문자열 길이 바이트로 반환
 ** length: 바이트 총 길이
 ** alphabet: 영어 갯수
 ** korean: 한글 갯수
 */
const getStringBytes = (str: string): {length:number, alphabet: number, korean: number} => {
    // 한글 3으로 계산 속도 가장 빠름
    // if(str === null || str === undefined) return 0;
    // else {
    //     let b,i,c;
    //     for(b=i=0;c=str.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
	// 	return = b;
    // }

    let strLength = str.length;
    let byteLength = 0;
    let alphabetCount = 0;
    let koreanCount = 0;

    for(let i = 0; i < strLength ; i++){
        if(escape(str.charAt(i)).length > 4){
            koreanCount += 1;
            byteLength += 3;
        }else{
            alphabetCount += 1;
            byteLength += 1;
        }
    }

    return { length:byteLength, alphabet:alphabetCount, korean:koreanCount }
}

export default getStringBytes;