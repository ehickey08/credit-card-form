import React from 'react';
import styled from 'styled-components';
import { options } from '../../images';
export const CardBackground = ({index, side}) => {
    
    return (
        <CardBackgroundContainer className='card-background-container' side={side}>
            <img src={options[index]} alt=''/>
        </CardBackgroundContainer>
    );
};

const CardBackgroundContainer = styled.div`
    height: 100%;
    background-color: #1c1d27;
    position: absolute;
    height: 100%;
    background-color: #1c1d27;
    left: 0;
    top: 0;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    transform: ${({side}) => side==='back' ? 'rotateY(-180deg)' : '0'}

    img {
        max-width: 100%;
        display: block;
        max-height: 100%;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(6, 2, 29, 0.45);
    }
`;
