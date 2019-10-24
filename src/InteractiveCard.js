import React, { Component } from 'react';
import styled from 'styled-components';

export default class InteractiveCard extends Component {
    render() {
        return (
            <CardContainer>
                <Card></Card>
            </CardContainer>
        );
    }
}

const CardContainer = styled.div`
    margin-bottom: -130px;
`;
const Card = styled.div`
    max-width: 430px;
    height: 270px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    width: 100%;
`;
