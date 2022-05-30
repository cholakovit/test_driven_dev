import React from 'react'
import Calculator from '../components/Calculator'
import { fireEvent, render } from '@testing-library/react'


let getByTestId
let btnEl1
let btnEl2
let signEl
let btnEqual

beforeEach(() => {
    const component = render(<Calculator />)
    getByTestId = component.getByTestId

    btnEl1 = getByTestId('btn1')
    btnEl2 = getByTestId('btn2')
    signEl = getByTestId('plus')
    btnEqual = getByTestId('equal')

    expect(btnEl1.value).toBe('1')
    expect(btnEl2.value).toBe('2')
    expect(signEl.value).toBe('+')
    expect(btnEqual.value).toBe('equal')
})


test('component renders with correct title', () => {
    const titleEl = getByTestId('title')
    expect(titleEl.textContent).toBe('Calculator')
})

test('calculating 1 + 1', () => {

    fireEvent.click(btnEl1)

    const value2FieldEl = getByTestId('value2')
    expect(value2FieldEl.textContent).toBe('1')

    fireEvent.click(signEl)

    const signField = getByTestId('sign')
    expect(signField.textContent).toBe('+')

    fireEvent.click(btnEl1)

    const value1El = getByTestId('value1')
    expect(value1El.textContent).toBe('1')

    fireEvent.click(btnEqual)

    const totalEl = getByTestId('total')
    expect(totalEl.textContent).toBe('2')   
})

test('calculating 1 + 2', () => {

    fireEvent.click(btnEl1)

    const value2FieldEl = getByTestId('value2')
    expect(value2FieldEl.textContent).toBe('1')

    fireEvent.click(signEl)

    const signField = getByTestId('sign')
    expect(signField.textContent).toBe('+')

    fireEvent.click(btnEl2)

    const value1El = getByTestId('value1')
    expect(value1El.textContent).toBe('1')

    fireEvent.click(btnEqual)

    const totalEl = getByTestId('total')
    expect(totalEl.textContent).toBe('3')   
})

test('calculating 2 + 2', () => {

    fireEvent.click(btnEl2)

    const value2FieldEl = getByTestId('value2')
    expect(value2FieldEl.textContent).toBe('2')


    fireEvent.click(signEl)

    const signField = getByTestId('sign')
    expect(signField.textContent).toBe('+')

    fireEvent.click(btnEl2)

    const value1El = getByTestId('value1')
    expect(value1El.textContent).toBe('2')

    fireEvent.click(btnEqual)

    const totalEl = getByTestId('total')
    expect(totalEl.textContent).toBe('4')   
})

test('calculating 2 + 1', () => {

    fireEvent.click(btnEl2)

    const value2FieldEl = getByTestId('value2')
    expect(value2FieldEl.textContent).toBe('2')

    fireEvent.click(signEl)

    const signField = getByTestId('sign')
    expect(signField.textContent).toBe('+')

    fireEvent.click(btnEl1)

    const value1El = getByTestId('value1')
    expect(value1El.textContent).toBe('2')

    fireEvent.click(btnEqual)

    const totalEl = getByTestId('total')
    expect(totalEl.textContent).toBe('3')   
})