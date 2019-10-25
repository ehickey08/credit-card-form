import React from 'react';
import styled from 'styled-components';
export const CardStripe = () => {
    return <CardStripeContainer></CardStripeContainer>;
};

const CardStripeContainer = styled.div`
    background: rgba(0, 0, 19, 0.8);
    width: 100%;
    height: 50px;
    margin-top: 30px;
    position: relative;
    z-index: 2;
`;
