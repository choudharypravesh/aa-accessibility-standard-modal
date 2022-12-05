import { render } from '@testing-library/react';
import {screen} from '@testing-library/dom'
import App from './App';

describe('NewDay Modal Dialog Assignment' , () => {
  
  test('renders title "Let’s see a modal"', async () => {
    render(<App />);
    const element = await screen.findByTestId('heading')
    console.log("🚀 ~ file: App.test.js ~ line 16 ~ test ~ element", element)
    //expect(screen.findByTestId('heading')).toBe('Let’s see a modal')
  })
})