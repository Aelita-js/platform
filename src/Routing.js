import React from 'react';
import { Route, Routes } from 'react-router';
import { Layouts } from './components/Layouts.jsx';
import MainPage from './pages/MainPage';
import CoursePage from './pages/CoursePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage.jsx';
import NotfoundPage from './pages/NotfoundPage.jsx';

const Routing = () => {

    const isAuth = () => {
        return localStorage.getItem('jwt-access')
    }


    return (
        <Routes>
            <Route path="/" element={<Layouts/>}>
                <Route index element={<MainPage/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/mycourses" element={<CoursePage />} />
                <Route path="/course" element={<CoursePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotfoundPage />} />
            </Route>
        </Routes>
    );
};

export default Routing;