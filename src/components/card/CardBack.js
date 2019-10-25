import React from 'react';
import styled from 'styled-components';
import { CardFrontContainer } from './CardFront';
import { CardStripe, CardBackground, BackContent } from './index';

export const CardBack = () => {
    return <CardBackContainer className='card-back'>
        <CardBackground />
        <CardStripe />
        <BackContent />
    </CardBackContainer>;
};

export const CardBackContainer = styled(CardFrontContainer)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
    z-index: 2;
    padding: 0;
    height: 100%;
`;
