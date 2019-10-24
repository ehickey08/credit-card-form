import React, {useState} from 'react';
import InfoForm from './InfoForm'

function App() {
    const [globalState, setGlobalState] = useState({});
    const passUpState = (formState) => {
        setGlobalState({...formState})
    }
    
    return <div className='App'><InfoForm passUpState={passUpState}/></div>;
}

export default App;
