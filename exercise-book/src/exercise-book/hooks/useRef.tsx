import { useRef, useEffect, useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(`inputRef Re-rendering: ${inputRef.current!.value}`);
  },[inputRef])

  useEffect(() => {
    console.log(`inputValue Re-rendering: ${inputValue}`);
  },[inputValue])

  const checkInputRefValue = () => {
    console.log(`inputRef check value: ${inputRef.current!.value}`);
  }

  return (
    <div>
      <input ref={inputRef} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={checkInputRefValue}>ref value 확인</button>
    </div>
  )
}

export default App;