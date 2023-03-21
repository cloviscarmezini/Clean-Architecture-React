import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Input } from '.'

const makeSut = (): RenderResult => {
  return render(<Input name="field"/>)
}

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const { getByTestId } = makeSut()
    const input = getByTestId('field') as HTMLInputElement

    expect(input.readOnly).toBe(true)
  })
})
