import React from 'react';
import styled from 'styled-components';
import { InputGroupContainer } from './InputGroup';
export const ExpirationGroup = ({ state, handleChange, onFocus, onBlur }) => {
    const months = ['Month'];
    const years = ['Year'];
    const today = new Date();
    const year = today.getFullYear();
    const month = state.expirationYear === `${year}` ? today.getMonth() : 0;
    console.log(month)
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
                <select
                    className='info-form_select'
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
                            disabled={option === 'Month' || +option<=month}>
                            {option}
                        </option>
                    ))}
                </select>

                <select
                    className='info-form_select'
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
            </div>
        </ExpirationGroupContainer>
    );
};

const ExpirationGroupContainer = styled(InputGroupContainer)`
    margin-right: 35px;
    .info-form_select {
        width: 45%;
    }

    .select-inputs {
        display: flex;
        justify-content: space-between;
    }
`;