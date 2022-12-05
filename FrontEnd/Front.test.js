import {render,screen} from '@testing-library/react'
import React from 'react';
import '@testing-library/jest-dom'
import Login from './src/Components/login';
import { BrowserRouter} from 'react-router-dom'


describe('Login', () => {

    test(' renders page login', () => { 
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        const email = screen.getByText(/email/i)
        const password = screen.getByText(/password/i)

        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    })
})