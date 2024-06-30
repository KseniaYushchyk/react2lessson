import React, {FC} from 'react';
import './App.css';
import UsersComponent from "./components/users-component/UsersComponent";

const App: FC<any> = () => {
  return (
        <div>
            <UsersComponent/>
        </div>
  )
}

export default App;
