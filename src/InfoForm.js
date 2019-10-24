import React from 'react';
import styled from 'styled-components';
import { InputGroup, ExpirationGroup } from './components';
import { digitOnly, letterOnly, formatCardNum, validCardNum } from './util';

class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            cardHolder: '',
            cardCvv: '',
            expirationYear: 'Year',
            expirationMonth: 'Month',
        };
        this.passUpState = props.passUpState;
    }

    handleChange = e => {
        e.persist();
        let shouldContinue = true;
        if (e.target.name === 'cardNumber') {
            let value = formatCardNum(e.target.value);
            if (value || value === '')
                this.setState({ [e.target.name]: value }, () =>
                    this.passUpState(this.state)
                );
            return;
        }

        if (e.target.name === 'cardCvv')
            shouldContinue = digitOnly(e.target.value);

        if (e.target.name === 'cardHolder')
            shouldContinue = letterOnly(e.target.value);
        if (shouldContinue) {
            this.setState({ [e.target.name]: e.target.value }, () =>
                this.passUpState(this.state)
            );
        }
    };

    onFocus = e => {
        e.persist();
        if (e.target.name === 'cardCvv') this.props.setFlipCard(true);
        this.props.setTargetField(e.target.name);
    };

    onBlur = e => {
        e.persist();
        if (e.target.name === 'cardCvv') this.props.setFlipCard(false);
        this.props.setTargetField('');
    };

    validateForm = () => {
        let correctCard = validCardNum(this.state.cardNumber);
        console.log(correctCard);
    };

    render() {
        return (
            <InfoFormContainer>
                <InfoRowContainer>
                    <InputGroup
                        label='Card Number'
                        name='cardNumber'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.cardNumber}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                </InfoRowContainer>
                <InfoRowContainer>
                    <InputGroup
                        label='Card Holder'
                        name='cardHolder'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.cardHolder}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                </InfoRowContainer>
                <InfoRowContainer>
                    <ExpirationGroup
                        handleChange={this.handleChange}
                        state={this.state}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                    <InputGroup
                        label='CVV'
                        name='cardCvv'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.cardCvv}
                        maxLength='4'
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                </InfoRowContainer>
                <button
                    onClick={this.validateForm}
                    className='info-form_submit'>
                    Submit
                </button>
            </InfoFormContainer>
        );
    }
}

const InfoFormContainer = styled.div`
    background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 180px 35px 35px;
    width: 100%;

    .info-form_submit {
        width: 100%;
        height: ${({ theme }) => theme.inputHeight};
        background: ${({ theme }) => theme.buttonColor};
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius};
        font-size: 2.2rem;
        font-weight: 600;
        box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
        color: #fff;
        cursor: pointer;
    }
`;

const InfoRowContainer = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;

    .cardCvv {
        width: 33%;
    }
`;

export default InfoForm;
