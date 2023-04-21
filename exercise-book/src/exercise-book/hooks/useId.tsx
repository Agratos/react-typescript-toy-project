import { useId } from 'react';
const App = () => {
    return(
      <div>
        <h1>Host1</h1>
        <PersonForm />
        <h1>Host2</h1>
        <PersonForm />
      </div>
    )
  }
  
  const PersonForm = () => {
    const id = useId();
    return (
      <div>
        <label htmlFor={id +'firstName'}>First Name</label>
        <div>
          <input id={id + 'firstName'} type='text' />
        </div>
    
        <label htmlFor={id + 'lastName'}>First Name</label>
        <div>
            <input id={id + 'lastName'} type='text' />
        </div>
      </div>
    )
  }
  
  
  export default App;