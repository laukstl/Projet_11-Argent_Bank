// NOTE: Au rendu final : Optimiser les images

import "./App.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signin from '../pages/Signin';
import User from '../pages/User';

import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Error from '../components/Error';

import { getToken } from "../features/auth/authUtils";

const App = () => {
    const token = getToken();

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    
                    {/* { token && ( */}
                        <Route path="/user" element={<User />} />
                    {/* )} */}

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
