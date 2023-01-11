import React from 'react'
import { render } from '@testing-library/react'
import Login from '.'

describe('Login Component', () => {
  test('Shoud start with initial state', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })

  // test('Shoud not render spinner and error on start', () => {
  //   const { getByTestId } = render(<Login />)
  //   const errorWrap = getByTestId('error-wrap')

  //   expect(errorWrap.childElementCount).toBe(0)
  // })
})
