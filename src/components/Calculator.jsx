import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState()
    const [sign, setSign] = useState()
    const [total, setTotal] = useState()

    const memoValue = () => {
        localStorage.setItem('memo', value)
        setValue('')
    }

    const calculate = () => {

        let val1 = localStorage.getItem('memo')
        let total = ''

        switch(sign) {
            case '+':
                setTotal(parseInt(val1) + parseInt(value))
                console.log('total', total)
                break
            case '-':
                console.log('equal sign', sign)
                break

            default:
                console.log('sorry')
        }

        setValue('')
        setSign('')
        localStorage.clear()
    }


    return (
        <div>
            <h3 data-testid='title'>Calculator</h3>
            
            <div>
                <button onClick={(e) => { setValue(e.target.value) }} value='1' data-testid='btn1'>1</button>
                <button onClick={(e) => { setValue(e.target.value) }} value='2' data-testid='btn2'>2</button>
                <div className='clearfix'></div>
                <button onClick={(e) => { setSign(e.target.value); memoValue(); } } value='+' data-testid='plus'>+</button>
                <button onClick={calculate} data-testid='equal' value='equal'>=</button>
            </div>
            <div className='show'>
                {localStorage.getItem('memo') ? <div data-testid='value1'>{localStorage.getItem('memo')}</div> : '' }
                {sign ? <div data-testid='sign'>{sign}</div> : '' }
                {value ? <div data-testid='value2'>{value}</div> : '' }
            </div>
            {total ? <div data-testid='total' className='total' id='hideMe'>{total}</div> : '' }
        </div>
    )
}


export default Calculator