import React, { createContext } from 'react';
import Home from '../components/Home/Home';
import App from '../App';



export const Context = createContext();

function Create() {
  return (
    <div>
      <Context.Provider value={"Hemanth"}>
        <App/>
      </Context.Provider>
    </div>
  );
}

export default Create;
