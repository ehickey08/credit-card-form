import React from 'react';
import styled from 'styled-components';
import { cards } from '../../images';
import { cardType } from '../../util';

export const BackContent = ({ cvv, cardNumber }) => {
    let type = cardType(cardNumber);
    return (
        <BackContentContainer>
            <div className='cvv-label'>CVV</div>
            <div className='cvv-container'>{cvv}</div>
            <div className='card-type'>
                <img src={cards[type]} alt='' />
            </div>
        </BackContentContainer>
    );
};

const BackContentContainer = styled.div`
    text-align: right;
    position: relative;
    z-index: 2;
    padding: 15px;

    .cvv-label {
        padding-right: 10px;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 5px;
    }

    .cvv-container {
        height: 45px;
        background: #fff;
        margin-bottom: 30px;
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        color: #1a3b5d;
        font-size: 18px;
        border-radius: 4px;
        box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);
    }

    .card-type {
        height: 45px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        max-width: 100px;
        margin-left: auto;
        width: 100%;

        img {
            max-width: 100%;
            object-fit: contain;
            max-height: 100%;
            object-position: top right;
        }
    }
`;
