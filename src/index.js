import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './state/store';
import {AuthProvider} from "@asgardeo/auth-react";

const config = {
    signInRedirectURL: window.config.auth.signInRedirectURL,
    signOutRedirectURL: window.config.auth.signOutRedirectURL,
    clientID: window.config.auth.clientID,
    baseUrl: window.config.auth.baseUrl,
    scope: ["openid", "profile"]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider config={config}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </AuthProvider>
    </React.StrictMode>
);
