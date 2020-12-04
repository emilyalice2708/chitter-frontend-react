import { render } from '@testing-library/react'
import { screen } from '@testing-library/react';
import PeepList from './peepList.js'

test('renders the list of peeps', () => {
  render(<PeepList peeps={[{body: "hi"}, {body: "hello"}]}/>);
  const firstPeep = screen.getByText(/hi/i)
  const secondPeep = screen.getByText(/hello/i)
  expect(firstPeep).toBeInTheDocument();
  expect(secondPeep).toBeInTheDocument();
})