import { useState, useRef } from 'react';

interface ITest {
  number: number;
}

const App = () => {
  const [test, setTest] = useState<ITest>({number: 1});

  const obj1 = {number: '1'};
  const obj2 = {number: '1'};
  const obj1Copy = obj1;

  const arr1 = [1];
  const arr2 = [1];
  const arr1Copy = arr1;

  const func1 = () => {
    return true;
  }
  const func2 = () => {
    return true;
  }
  const func1Copy = func1;

  return (
    <>
      <div>{`obj1 === obj2 : ${obj1 === obj2}`}</div>
      <div>{`obj1 === obj1Copy : ${obj1 == obj1Copy}`}</div>

      <div>{`arr1 === arr2 : ${arr1 === arr2}`}</div>
      <div>{`arr1 === arr1Copy : ${arr1 == arr1Copy}`}</div>

      <div>{`func1 === func2 : ${func1 === func2}`}</div>
      <div>{`func1 === func1Copy : ${func1 == func1Copy}`}</div>
    </>
  )
}
export default App;