import React from 'react';
import styled from 'styled-components';
import { InputGroup, ExpirationGroup } from './components';
import {
    digitOnly,
    letterOnly,
    formatCardNum,
    validCardNum,
    validCvv,
} from './util';

class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            cardHolder: '',
            cardCvv: '',
            expirationYear: 'Year',
            expirationMonth: 'Month',
            errors: {},
            position: null
        };
        this.passUpState = props.passUpState;
    }

    componentDidUpdate(prevProps, prevState) {
        //without this ref and selection setting, cursor moves to end of input on change
        let index = prevState.position || 0;
        if(index%5===0 && index+1>=this.state.cardNumber.length && index!==0) ++index
        this.inputRef.setSelectionRange(index, index);
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
            this.setState({position: e.target.selectionStart})
            return;
        }

        if (e.target.name === 'cardCvv')
            shouldContinue = digitOnly(e.target.value);

        if (e.target.name === 'cardHolder')
            shouldContinue = letterOnly(e.target.value);
        if (shouldContinue) {
            this.setState({ [e.target.name]: e.target.value }, () =>
                this.passUpState(this.state) //sends state to app, to pass to interactive card
            );
        }
    };

    onFocus = e => {
        e.persist();
        if (e.target.name === 'cardCvv') this.props.setFlipCard(true);
        this.props.setTargetField(e.target.name); //adds focus to interactive card
    };

    onBlur = e => {
        e.persist();
        if (e.target.name === 'cardCvv') this.props.setFlipCard(false);
        this.props.setTargetField(''); //removes focus for interactive card
    };

    validateForm = () => {
        this.setState({ errors: {} });
        let correctCard = validCardNum(this.state.cardNumber);
        let correctCvv = validCvv(this.state.cardCvv, this.state.cardNumber);
        for (let key in this.state) {
            if (
                this.state[key] === '' ||
                this.state[key] === 'Month' ||
                this.state[key] === 'Year'
            ) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        [key]: '*This field is required.',
                    },
                }));
            }
        }
        if (!correctCard && this.state.cardNumber) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    cardNumber: '*Invalid card number.',
                },
            }));
        }

        if (!correctCvv && this.state.cardCvv) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    cardCvv: '*Invalid CVV number.',
                },
            }));
        }
    };

    assignRef = c => {
        this.inputRef = c
    }

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
                        error={this.state.errors.cardNumber}
                        reference={this.assignRef}
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
                        error={this.state.errors.cardHolder}
                    />
                </InfoRowContainer>
                <InfoRowContainer>
                    <ExpirationGroup
                        handleChange={this.handleChange}
                        state={this.state}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        error={this.state.errors}
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
                        error={this.state.errors.cardCvv}
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

    .invalid {
        border: 1px solid ${({ theme }) => theme.errorColor};
    }

    .error-text {
        color: ${({ theme }) => theme.errorColor};
        font-size: 1.1rem;
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
