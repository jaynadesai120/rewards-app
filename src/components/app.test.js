import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

it('renders App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});