import React, { useState } from 'react';
import Login from '../components/auth/Login';
import { userLogin } from '../services/userServices';
import { context } from './context';

const UserContext = ({children}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e)=>{
        e.preventDefault();
        const user = {
            identifier:name,
            password:password
        }

        try {
            const {data, status} = await userLogin(user);
            localStorage.setItem("token",data.jwt);
            localStorage.setItem('user',JSON.stringify(data.user))
        } catch (error) {
            console.log(error);
        }

    }
    return ( 
        <context.Provider value={{
            name: name,
            setName:setName,
            email:email,
            setEmail:setEmail,
            password:password,
            setPassword:setPassword,
            handleLogin:handleLogin
        }}>
           {children}
        </context.Provider>
     );
}
 
export default UserContext;