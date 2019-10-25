import React, { Component } from 'react';
import styled from 'styled-components';
import { CardBack, CardFront } from './components';

export default class InteractiveCard extends Component {
    render() {
        return (
            <CardContainer>
                <Card
                    className={
                        this.props.flipCard ? 'flipped' : 'normal'
                    }>
                        <CardFront targetField={this.props.targetField}/>
                        <CardBack />
                    </Card>
            </CardContainer>
        );
    }
}

const CardContainer = styled.div`
    margin-bottom: -130px;

    .flipped {
        .card-front {
            transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
                rotateZ(0deg);
        }

        .card-back {
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
