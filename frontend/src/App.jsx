import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { SignUp } from './pages/signup/SignUp';
import { useSelector } from 'react-redux';
import { Loading } from './components/ui/Loading';

export const App = () => {
    const { status } = useSelector((state) => state.auth);
    const auth = status === 'authenticated';

    // if (status == 'checking') {
    //     return <Loading />;
    // }

    return (
        <>
            <div className='h-dvh flex items-center justify-center'>
                <Routes>
                    <Route
                        path='/'
                        element={auth ? <Home /> : <Navigate to={'/login'} />}
                    />
                    <Route
                        path='/login'
                        element={auth ? <Navigate to={'/'} /> : <Login />}
                    />
                    <Route
                        path='/signup'
                        element={auth ? <Navigate to={'/'} /> : <SignUp />}
                    />
                </Routes>
                <Toaster />
            </div>
        </>
    );
};
