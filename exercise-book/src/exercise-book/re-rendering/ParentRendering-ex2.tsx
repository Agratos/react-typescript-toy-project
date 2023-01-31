import { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <Parent lastChild={<ChildC />}>
      <ChildB />
    </Parent>
  )
}

const Parent = ({ children, lastChild }:{ children:React.ReactChild, lastChild: JSX.Element}) => { 
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }
  
  setInterval(() => {
    setTestHandle();
  },3000)

  return (
    <Frame>
      부모
      <button onClick={() => setTestHandle()}>입력</button>
      <ChildA />
      {children}
      {lastChild}
    </Frame>
  )
};
const ChildA = () => { 
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }
  
  return (
    <Frame>
      ChildA
      <button onClick={() => setTestHandle()}>입력</button>
    </Frame>
  )
};
const ChildB = () => { 
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }
  
  return (
    <Frame>
      ChildB
      <button onClick={() => setTestHandle()}>입력</button>
    </Frame>
  )
};
const ChildC = () => { 
  const [text, setTest] = useState<number>(0);

  const setTestHandle = () => {
    setTest((prev) => prev + 1);
  }
  
  return (
    <Frame>
      ChildC
      <button onClick={() => setTestHandle()}>입력</button>
    </Frame>
  )
};

const Frame = styled.div`
    padding: 32px;
`;

export default App;