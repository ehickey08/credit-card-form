import React from 'react';
import styled from 'styled-components';

export const FrontContent = () => {
    return (
        <FrontContentContainer>
            <TopRow />
            <MiddleRow />
            <BottomRow />
        </FrontContentContainer>
    );
};

const TopRow = () => {
    return (
        <TopRowContainer>
            <img />
            <div className='card-type'>
                <img />
            </div>
        </TopRowContainer>
    );
};

const MiddleRow = () => {
    return (
        <MiddleRowContainer>
            <label>{}</label>
        </MiddleRowContainer>
    );
};

const BottomRow = () => {
    return(
        <BottomRowContainer>
            <label>
                <div>Card Holder</div>
                <div>Full Name</div>
            </label>
            <div>
                <label>Expires</label>
                <label><span>MM</span></label>
                <span>/</span>
                <label><span>YY</span></label>
            </div>
        </BottomRowContainer>
    )
}

const FrontContentContainer = styled.div``;

const TopRowContainer = styled.div``;

const MiddleRowContainer = styled.div``;

const BottomRowContainer = styled.div``;
