import React, { useState } from 'react';
import styled from 'styled-components';
import InfoForm from './InfoForm';
import InteractiveCard from './InteractiveCard';

function App() {
    const [globalState, setGlobalState] = useState({});
    const [flipCard, setFlipCard] = useState(false);
    const [targetField, setTargetField] = useState('');

    const passUpState = formState => {
        setGlobalState({ ...formState });
    };

    return (
        <AppContainer>
            <InteractiveCard
                cardInfo={globalState}
                flipCard={flipCard}
                targetField={targetField}
            />
            <InfoForm
                passUpState={passUpState}
                setFlipCard={setFlipCard}
                setTargetField={setTargetField}
            />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    max-width: 570px;
    margin: 50px auto;
    width: 100%;
`;
export default App;
