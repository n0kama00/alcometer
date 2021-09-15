import React from 'react';

export default function FillOptions(){
    const numbers = [];
    for (let i = 0; i < 30; i++){
        numbers.push(i);
    }

    return (
        numbers.map(number => {
            return <option value={number}>{number}</option>
        })
    )
}