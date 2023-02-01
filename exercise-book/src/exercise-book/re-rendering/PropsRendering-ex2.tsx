import { useState } from 'react';

interface ITest {
  number: number;
}

const App = () => {
  const test = {number: 1};
  return (
    <>
      {test.number}
      <button onClick={() => test.number = 2}>증가</button>
    </>
  )
}


const App1 = () => {
  const [test, setTest] = useState<ITest>({number: 1});
  const setTestHandle = () => {
    setTest((prev) => {
      prev.number = 2;
      return prev
    });
  }
  return (
    <>
      {test.number}
      <button onClick={() => setTestHandle()}>증가</button>
    </>
  )
}


const App2 = () => {
  const [test, setTest] = useState<ITest>({number: 1});
  const setTestHandle = () => {
    setTest((prev) =>  {
      return {
        ...prev,
        number: prev.number + 1
      }
    });
  }
  return (
    <>
      {test.number}
      <button onClick={() => setTestHandle()}>증가</button>
    </>
  )
}