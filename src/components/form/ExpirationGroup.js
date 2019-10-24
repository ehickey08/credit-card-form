import React from 'react';
import styled from 'styled-components';
import { InputGroupContainer } from './InputGroup';
export const ExpirationGroup = ({
    state,
    handleChange,
    onFocus,
    onBlur,
    error,
}) => {
    let validityMonth = error.expirationMonth ? 'invalid' : 'valid';
    let validityYear = error.expirationYear ? 'invalid' : 'valid';
    const months = ['Month'];
    const years = ['Year'];
    const today = new Date();
    const year = today.getFullYear();
    const month = state.expirationYear === `${year}` ? today.getMonth() : 0;
    for (let i = 0; i < 12; i++) {
        years.push(`${year + i}`);
        months.push(`${i < 9 ? 0 : ''}${i + 1}`);
    }
    return (
        <ExpirationGroupContainer>
            <label htmlFor='expirationMonth' className='info-form_label'>
                Expiration Date
            </label>
            <div className='select-inputs'>
                <div className='select_and_error'>
                    <select
                        className={`info-form_select ${validityMonth}`}
                        autoComplete='off'
                        onFocus={onFocus}
                        onBlur={onBlur}
                        value={state.expirationMonth}
                        name='expirationMonth'
                        onChange={handleChange}>
                        {months.map(option => (
                            <option
                                key={option}
                                value={option}
                                disabled={
                                    option === 'Month' || +option <= month
                                }>
                                {option}
                            </option>
                        ))}
                    </select>
                    {error.expirationMonth && (
                        <span className='error-text'>{error.expirationMonth}</span>
                    )}
                </div>
                <div className='select_and_error'>
                    <select
                        className={`info-form_select ${validityYear}`}
                        autoComplete='off'
                        onFocus={onFocus}
                        onBlur={onBlur}
                        value={state.expirationYear}
                        name='expirationYear'
                        onChange={handleChange}>
                        {years.map(option => (
                            <option
                                key={option}
                                value={option}
                                disabled={option === 'Year'}>
                                {option}
                            </option>
                        ))}
                    </select>
                    {error.expirationYear && (
                        <span className='error-text'>{error.expirationYear}</span>
                    )}
                </div>
            </div>
        </ExpirationGroupContainer>
    );
};

const ExpirationGroupContainer = styled(InputGroupContainer)`
    margin-right: 35px;

    .select-inputs {
        display: flex;
        justify-content: space-between;
    }

    .select_and_error{
        display: flex;
        flex-direction: column;
        width: 45%
    }
`;
