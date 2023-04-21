import { useState, useEffect } from 'react';

const App = () => {
  const [everyUpdate, setEveryUpdate] = useState(0);
  const [firtstUpdate, setFirstUpdate] = useState(0);
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  useEffect(() => {
    //setEveryUpdate((prevValue) => prevValue + 1);
  })

  useEffect(() => {
    setFirstUpdate((prevValue) => prevValue + 1);
  }, [])

  useEffect(() => {
    setValueB((prevValue) => prevValue + 1);
  }, [valueA])

  const handleSetValueA = () => {
    setValueA((prevValue) => prevValue + 1);
  }

  return (
    <div>
      <div>{`리렌더링 할 때마다 작동: ${everyUpdate}`}</div>
      <div>{`처음만 작동: ${firtstUpdate}`}</div>
      <div>{`ValueA가 작동 할 때마다: ${valueB}`}</div>
      <div>{`ValueA: ${valueA}`}</div>
      <button onClick={handleSetValueA}>value A 증가</button>
    </div>
  )
}

export default App;