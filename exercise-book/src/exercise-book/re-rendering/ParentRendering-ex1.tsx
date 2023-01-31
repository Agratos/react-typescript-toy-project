import { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }

  return (
    <div>
      부모
      <button onClick={() => setTestHandle()}>입력</button>

      <Child1>
        <Child2>
            <Child3 />
        </Child2>
      </Child1>
    </div>
  )
}

const Child1 = ({ children }:{ children:React.ReactChild }) => { 
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }
  
  return (
    <Frame>
      형제 1
      <button onClick={() => setTestHandle()}>입력</button>
      {children}
    </Frame>
  )
};
const Child2 = ({ children }:{ children:React.ReactChild }) => { 
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }
  
  return (
    <Frame>
      형제 2
      <button onClick={() => setTestHandle()}>입력</button>
      {children}
    </Frame>
  )
};
const Child3 = () => { 
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }
  
  return (
    <Frame>
      형제 3
      <button onClick={() => setTestHandle()}>입력</button>
    </Frame>
  )
};

const Frame = styled.div`
    padding: 32px;
`;

export default App;