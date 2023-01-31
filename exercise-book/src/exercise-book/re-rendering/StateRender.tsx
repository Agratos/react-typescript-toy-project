import { useState, useRef } from 'react';
const StateRender = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setTest] = useState<string>('');
  
  const sleep = (ms:number) => {
      const wakeUpTime = Date.now() + ms;
      while (Date.now() < wakeUpTime) {}
  }

  const setTestHandle = () => {
    setTest(inputRef?.current?.value ?? '내용이 없습니다.');
    sleep(3000);
    setTestHandle1();
  }

  const setTestHandle1 = () => {
    setTest(inputRef?.current?.value ?? '내용이 없습니다.');
    sleep(3000);
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => setTestHandle()}>입력</button>
    </div>
  )
}
export default StateRender;