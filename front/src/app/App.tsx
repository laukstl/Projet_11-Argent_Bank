// NOTE: Au rendu final : Optimiser les images

import "./App.scss"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import User from '../pages/User';

import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Error from '../components/Error';

// import { getToken } from "../features/auth/authUtils";
import { useGetToken } from "../features/auth/authUtils";

const App = () => {
    // const token = getToken();
    const token = useGetToken();

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    
                    { token ? (
                        <Route path="/user" element={<User />} /> // route protégée
                    ) : (
                        <Route path="/user" element={<Navigate to="/sign-in" replace />} />
                    )}

                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<Signin />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
