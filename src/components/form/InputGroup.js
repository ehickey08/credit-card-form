import React from 'react';
import styled from 'styled-components';

export const InputGroup = ({ label, name, type, handleChange, value, maxLength, onFocus, onBlur, error, reference }) => {
    let validity = error ? 'invalid': 'valid'
    return (
        <InputGroupContainer className={name}>
            <label htmlFor={name} className='info-form_label'>
                {label}
            </label>
            <input
                type={type}
                className={`info-form_input ${validity}`}
                autoComplete='off'
                value={value}
                name={name}
                onChange={handleChange}
                maxLength={maxLength}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={reference}
            />
            {error && <span className='error-text'>{error}</span>}
        </InputGroupContainer>
    );
};

export const InputGroupContainer = styled.div`
    width: 100%;
    .info-form_label {
        font-size: 1.5rem;
        margin-bottom: 5px;
        font-weight: 600;
        color: ${({ theme }) => theme.fontColor};
        width: 100%;
        display: block;
    }

    .info-form_input,
    .info-form_select {
        width: 100%;
        height: ${({ theme }) => theme.inputHeight};
        border-radius: ${({ theme }) => theme.borderRadius};
        border: 1px solid ${({ theme }) => theme.borderColor};
        font-size: 1.8rem;
        padding: 5px 15px;
        color: ${({ theme }) => theme.fontColor};
    }
`;
