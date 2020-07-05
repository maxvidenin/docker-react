import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders hi there text', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/hi there/i);
    expect(linkElement).toBeInTheDocument();
});
