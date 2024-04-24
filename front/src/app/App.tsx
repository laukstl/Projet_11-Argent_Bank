import "./App.scss"

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks'

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import User from '../pages/User';
import Transaction from "../components/Transaction";

import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Error from '../components/Error';

import { useGetToken } from "../features/auth/authUtils";
import { selectIsAuthenticated } from "../features/auth/authSlice";

const App = () => {
    const token = useGetToken();
    const isAuthenticated = useAppSelector(selectIsAuthenticated); // si appel de plusieurs comp
    // const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated); // si appel ponctuel

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/user"
                        element={token ? <User /> : <Navigate to="/sign-in" replace />}
                    />
                    <Route
                        path="/transaction"
                        element={token ? <Transaction /> : <Navigate to="/sign-in" replace />}
                    />
                    <Route
                        path="/sign-in"
                        element={isAuthenticated ? <Navigate to="/user" replace /> : <Signin />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
