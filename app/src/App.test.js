import React from 'react'
import { render, screen } from '@testing-library/react'
import AppDemo from './App'

test('renders learn react link', () => {
  render(<AppDemo />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
