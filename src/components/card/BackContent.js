import React from 'react';
import styled from 'styled-components';

export const BackContent = () => {
    return (
        <BackContentContainer>
            <div>CVV</div>
            <div></div>
            <div className='card-type'>
                <img />
            </div>
        </BackContentContainer>
    );
};

const BackContentContainer = styled.div``;
