/** 지원 브라우저
 ** 크롬 버전 66 이상
 ** 사파리
 *
 * 미지원: IE
 */
const textCopy = (text:string) => {
    if(navigator.clipboard){
        console.log(text);
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert('클립보드에 복사되었습니다.');
            })
            .catch(() => {
                alert('복사를 다시 시도해주세요');
            })
        return
    }else{
        if(!document.queryCommandSupported('copy')) return alert('복사하기가 지원되지 않는 브라우저 입니다.');
    }

    // const textarea = document.createElement('textarea');
    // textarea.value = text;
    // textarea.style.top = '0';
    // textarea.style.left = '0';
    // textarea.style.display = 'hidden';

    // document.body.appendChild(textarea);
    // textarea.focus();
    // textarea.select();
    // document.execCommand('copy');
    // alert('클립보드에 복사되었습니다.')
}

export default textCopy;