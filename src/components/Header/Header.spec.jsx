import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'
import "@testing-library/jest-dom"

test('Verifica se o Header está renderizando corramente', () => {
  const { getByText } = render(
    <Header />
  )

  expect(getByText('Front End React Test')).toBeInTheDocument()
})