import React from 'react';
import styled from 'styled-components';
import { cards } from '../../images';
import { cardType, formatCardWithMask } from '../../util';

export const FrontContent = ({ cardInfo }) => {
    const {
        cardNumber,
        cardHolder,
        expirationYear,
        expirationMonth,
    } = cardInfo;
    let type = cardType(cardNumber);
    return (
        <FrontContentContainer className='front-row-container'>
            <TopRow type={type} />
            <MiddleRow cardNumber={cardNumber} type={type} />
            <BottomRow
                cardHolder={cardHolder}
                expirationYear={expirationYear}
                expirationMonth={expirationMonth}
            />
        </FrontContentContainer>
    );
};

const TopRow = ({ type }) => {
    return (
        <TopRowContainer className='top-row-container'>
            <img className='chip-image' src={cards.chip} alt='' />
            <div className='card-type'>
                <img alt='' src={cards[type]} />
            </div>
        </TopRowContainer>
    );
};

const MiddleRow = ({ cardNumber }) => {
    let value = cardNumber
        ? formatCardWithMask(cardNumber).split('')
        : `${'#'.repeat(4)} `.repeat(4).split('');
    return (
        <MiddleRowContainer className='middle-row-container'>
            {value.map(digit => (
                <span key={`${Math.random()}${digit}${Math.random()}`}>{digit}</span>
            ))}
        </MiddleRowContainer>
    );
};

const BottomRow = ({ cardHolder, expirationYear, expirationMonth }) => {
    const yearDisplay =
        expirationYear && expirationYear !== 'Year'
            ? expirationYear.slice(-2)
            : 'YY';
    const monthDisplay =
        expirationMonth && expirationMonth !== 'Month' ? expirationMonth : 'MM';
    return (
        <BottomRowContainer className='bottom-row-container'>
            <label htmlFor='card-holder' className='card-holder-label'>
                <div className='card-holder'>Card Holder</div>
                <div className='card-holder-name'>
                    {cardHolder || 'Full Name'}
                </div>
            </label>
            <div className='card-date'>
                <label htmlFor='card-month' className='card-date-label'>
                    Expires
                </label>
                <label htmlFor='card-month' className='month-label'>
                    <span>{monthDisplay}</span>
                </label>
                /
                <label htmlFor='card-year' className='year-label'>
                    <span>{yearDisplay}</span>
                </label>
            </div>
        </BottomRowContainer>
    );
};

const FrontContentContainer = styled.div`
    padding: 25px 15px;
    position: relative;
    z-index: 4;
    height: 100%;
    text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
    user-select: none;
`;

const TopRowContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 10px;

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

    .chip-image {
        width: 60px;
    }
`;

const MiddleRowContainer = styled.div`
    font-weight: 500;
    line-height: 1;
    color: #fff;
    font-size: 27px;
    margin-bottom: 35px;
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;

    span {
        width: 16px;
        display: inline-block;
    }
`;

const BottomRowContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: flex-start;

    .card-holder-label{
        color: #fff;
        width: 100%;
        max-width: calc(100% - 85px);
        padding: 10px 15px;
        font-weight: 500;
        display: block;
        cursor: pointer;

        .card-holder{
            opacity: 0.7;
            font-size: 1.3rem
            margin-bottom: 6px;
        }

        .card-holder-name{
            font-size: 1.8rem;
            line-height: 1;
            white-space: nowrap;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            text-transform: uppercase;
        }
    }

    .card-date{
        flex-wrap: wrap;
        font-size: 18px;
        margin-left: auto;
        padding: 10px;
        display: inline-flex;
        width: 80px;
        white-space: nowrap;
        flex-shrink: 0;
        cursor: pointer;

        .card-date-label{
            opacity: 0.7;
            font-size: 13px;
            padding-bottom: 6px;
            width: 100%;
        }

        .month-label, .year-label{
            position: relative;

            span{
                width: 22px;
                display: inline-block;
            }
        }
    }
`;
