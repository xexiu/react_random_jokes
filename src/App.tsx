import { Dispatch, SetStateAction, useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './custom-hooks/useRandomJoke';
import logo from './logo.svg';

interface Values {
  firstName: string;
  lastName: string
}

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [allValues, setAllValues]: [Values, Dispatch<SetStateAction<Values>>] = useState({
    firstName: 'Sergiu',
    lastName: 'Mironescu'
  });
  const data = useRandomJoke(allValues.firstName, allValues.lastName);

  const generateJoke = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    return setAllValues((prev: Values) => {
      return {
        ...prev,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Object.keys(data).length !== 0 && <h3>{data.value.joke}</h3>}

        <form action="">
          <input type="text" name="firstName" ref={firstNameRef} placeholder="First Name" />
          <input type="text" name="lastName" ref={lastNameRef} placeholder="Last Name" />
          <br />
          <br />
            <button onClick={generateJoke}>Generate Jock</button>
        </form>
      </header>
    </div>
  );
}

export default App;
