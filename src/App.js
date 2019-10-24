import React, { useState } from 'react';
import styled from 'styled-components';
import InfoForm from './InfoForm';

function App() {
    const [globalState, setGlobalState] = useState({});
    const passUpState = formState => {
        setGlobalState({ ...formState });
    };

    return (
        <AppContainer>
            <InfoForm passUpState={passUpState} />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    max-width: 570px;
    margin: 50px auto;
    width: 100%;
`;
export default App;
