import { useState } from 'react';

const App = () => {
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState({
    id: 1,
    name: 'lee'
  });

  const handleSetName = (value:string) => {
    setName(value);
  }
  const handleSetUserBad = () => {
    setUser((prevState) => {
      const nextState = prevState;
      nextState.id += 1;
      console.log(`Wrong Update: ${nextState}`);
      return nextState;
    })
  }
  const handleSetUserGood = () => {
    setUser((prevState) => {
      const nextState = {
        ...prevState, 
        id: prevState.id + 1
      };
      console.log(`Correct Update: ${nextState}`);
      return nextState;
    })
  }

  return (
    <div>
      <div>{`name: ${name}`}</div>
      <input onChange={(e) => handleSetName(e.target.value)}/>
      <div style={{marginTop:'24'}}>{`id: ${user.id} // name: ${user.name}`}</div>
      <button onClick={handleSetUserBad} >ID 적용 안됨</button>
      <button onClick={handleSetUserGood} >ID 적용</button>
    </div>
  )
}

export default App;