/* eslint-disable react/prop-types */
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useContext, useState } from 'react';
import { checkDefaultTheme } from '../utils/common';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const DashboardContext = createContext();

const DashboardLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
    const { user } = useLoaderData();
    const navigate = useNavigate();

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get('/auth/logout');
        toast.success('Logging out...')
    };

    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                isDarkTheme,
                toggleDarkTheme,
                toggleSidebar,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className='dashboard'>
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className='dashboard-page'>
                            <Outlet context={{ user }} />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
