import React, { Component } from 'react';
import styled from 'styled-components';
import { CardBack, CardFront } from './components';

export default class InteractiveCard extends Component {
    render() {
        return (
            <CardContainer className='card-container'>
                <Card
                    className={
                        this.props.flipCard ? 'card flipped' : 'card normal'
                    }>
                    <CardFront
                        targetField={this.props.targetField}
                        index={this.props.index}
                        cardInfo={this.props.cardInfo}
                    />
                    <CardBack index={this.props.index} />
                </Card>
            </CardContainer>
        );
    }
}

const CardContainer = styled.div`
    margin-bottom: -130px;

    .flipped {
        .card-front-container {
            transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
                rotateZ(0deg);
        }

        .card-back-container {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg)
                rotateZ(0deg);
        }
    }
`;
const Card = styled.div`
    max-width: 430px;
    height: 270px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    width: 100%;
`;
