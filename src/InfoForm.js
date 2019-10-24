import React from 'react';
import styled from 'styled-components';
import {InputGroup, ExpirationGroup} from './components'
class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.passUpState = props.passUpState;
    }

    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => this.passUpState(this.state)
        );
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
                    />
                </InfoRowContainer>
                <InfoRowContainer>
                    <InputGroup
                        label='Card Holder'
                        name='cardHolder'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.cardHolder}
                    />
                </InfoRowContainer>
                <InfoRowContainer>
                    <ExpirationGroup
                        handleChange={this.handleChange}
                        state={this.state}
                    />
                    <InputGroup
                        label='CVV'
                        name='cardCvv'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.cardCvv}
                    />
                </InfoRowContainer>
                <button className='info-form_submit'>Submit</button>
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

    .info-form_submit{
        width: 100%;
        height: ${({theme}) => theme.inputHeight};
        background: ${({theme}) => theme.buttonColor};
        border: none;
        border-radius: ${({theme}) => theme.borderRadius};
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

    .cardCvv{
        width: 33%;
    }
`;




export default InfoForm;
