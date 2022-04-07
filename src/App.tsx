import React, {FC, createContext} from 'react'
import './App.css';
import Person from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string
}
const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {

  const name: string = "Ciprian"
  const age: number = 20
  const isMarried: boolean = true

  const getName = (name: string): string => {
      if(name === "Ciprian") {
        return "Ciprian"
      } else {
        return "Something"
      }
  }

  const contextValue: AppContextInterface = {
    name: 'Ciprian',
    age: 20,
    country: "Sweden"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        Hello {name}. You are {age} years old. {isMarried ? "You are married" : "You are not married"}
        <Person name="Andrei" age={20} email="some sort of mail" />
      </div>
    </AppContext.Provider>
  );
}

export default App;
