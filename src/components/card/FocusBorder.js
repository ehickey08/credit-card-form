import React from 'react';
import styled from 'styled-components';
export const FocusBorder = ({ targetField }) => {
    return (
        <FocusBorderContainer
            className={`${targetField}`}></FocusBorderContainer>
    );
};

const FocusBorderContainer = styled.div`
    position: absolute;
    z-index: 3;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.65);

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #08142f;
        height: 100%;
        border-radius: 5px;
        filter: blur(25px);
        opacity: 0.5;
    }

    &.cardHolder {
    }
`;
