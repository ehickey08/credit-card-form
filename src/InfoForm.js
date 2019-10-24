import React from 'react';
import styled from 'styled-components';

class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.passUpState = props.passUpState
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        }, () => this.passUpState(this.state));
    };
    render() {
        const months = ['Month'];
        const years = ['Year'];
        const today = new Date();
        const year = today.getFullYear();

        for (let i = 0; i < 12; i++) {
            years.push(`${year + i}`);
            months.push(`${i < 9 ? 0 : ''}${i + 1}`);
        }

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
                    <SelectGroup
                        label='Expiration Date'
                        name='cardMonth'
                        handleChange={this.handleChange}
                        value={this.state.cardMonth}
                        options={months}
                    />
                    <SelectGroup
                        name='cardYear'
                        handleChange={this.handleChange}
                        value={this.state.cardYear}
                        options={years}
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

const InputGroup = ({ label, name, type, handleChange, value }) => {
    return (
        <InputGroupContainer>
            <label htmlFor={name} className='info-form_label'>
                {label}
            </label>
            <input
                type={type}
                className='info-form_input'
                autoComplete='off'
                value={value}
                name={name}
                onChange={handleChange}
            />
        </InputGroupContainer>
    );
};

const SelectGroup = ({ label, name, handleChange, value, options }) => {
    return (
        <InputGroupContainer>
            {label && (
                <label htmlFor={name} className='info-form_label'>
                    {label}
                </label>
            )}
            <select
                className='info-form_select'
                autoComplete='off'
                value={value}
                name={name}
                onChange={handleChange}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </InputGroupContainer>
    );
};

const InputGroupContainer = styled.div``;

const InfoFormContainer = styled.div``;

const InfoRowContainer = styled.div``;

export default InfoForm;
