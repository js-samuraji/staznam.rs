import React, { useState } from 'react';
import List from './List';

export default function BudgetForm() {
    let a = new Date();
    let m = '';

    switch (a.getMonth() + 1) {
        case 1:
            m = 'Januar';
            break;
        case 2:
            m = 'Februar';
            break;
        case 3:
            m = 'Mart';
            break;
        case 4:
            m = 'April';
            break;
        case 5:
            m = 'Maj';
            break;
        case 6:
            m = 'Jun';
            break;
        case 7:
            m = 'Jul';
            break;
        case 8:
            m = 'Avgust';
            break;
        case 9:
            m = 'Septembar';
            break;
        case 10:
            m = 'Oktobar';
            break;
        case 11:
            m = 'Novembar';
            break;
        case 12:
            m = 'Decembar';
            break;
        default:
            break;
    }

    const [month, setMonth] = useState(m);
    const [inputType, setInputType] = useState();
    const [text, setText] = useState();
    const [amount, setAmount] = useState();

    const selectHandler = (e) => {
        setMonth(e.target.value);
    }
    const handleClick = (e) => {
        console.log(text, amount);
        // console.log(month, 'mesec', inputType, 'input', text, 'tex', amount, 'amoun')
    }

    return (
        <div>
            <h3>Vaš Budžet za {month}</h3>
            <select onChange={selectHandler}>
                <option value='Januar'>Januar</option>
                <option value='Februar'>Februar</option>
                <option value='Mart'>Mart</option>
                <option value='April'>April</option>
                <option value='Maj'>Maj</option>
                <option value='Jun'>Jun</option>
                <option value='Jul'>Jul</option>
                <option value='Avgust'>Avgust</option>
                <option value='Septembar'>Septembar</option>
                <option value='Oktobar'>Oktobar</option>
                <option value='Novembar'>Novembar</option>
                <option value='Decembar'>Decembar</option>
            </select>
            <form onSubmit={(e) => e.preventDefault()}>
                <button onClick={e => setInputType('income')} className={inputType === 'income' ? "btn btn-primary" : "btn btn-light"} >Prihod</button>
                <button onClick={e => setInputType('expense')} className={inputType === 'expense' ? "btn btn-primary" : "btn btn-light"} >Rashod</button>
                <input type='text' onChange={e => setText(e.target.value)} placeholder='Opis'></input>
                <input type='number' onChange={e => setAmount(e.target.value)} placeholder='Iznos'></input>
                <button onClick={handleClick}>Unesi</button>
            </form>
            <List />
        </div>
    )
}
