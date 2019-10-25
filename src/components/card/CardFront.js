import React from 'react';
import styled from 'styled-components';
import { FocusBorder, CardBackground, FrontContent } from './index';

export const CardFront = ({ targetField, index, cardInfo }) => {
    return (
        <CardFrontContainer className='card-front-container'>
            <FocusBorder targetField={targetField} />
            <CardBackground index={index} side='front' />
            <FrontContent cardInfo={cardInfo}/>
        </CardFrontContainer>
    );
};

export const CardFrontContainer = styled.div`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
    transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    backface-visibility: hidden;
    height: 100%;

    .cardNumber {
        width: 376px;
        height: 47px;
        transform: translateX(15px) translateY(114px);
        opacity: 1;
    }

    .cardHolder {
        width: 315px;
        height: 57px;
        transform: translateX(15px) translateY(196px);
        opacity: 1;
    }

    .expirationMonth,
    .expirationYear {
        width: 80px;
        height: 57px;
        transform: translateX(355px) translateY(196px);
        opacity: 1;
    }
`;
