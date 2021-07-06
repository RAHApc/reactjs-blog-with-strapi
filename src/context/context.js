import { createContext } from "react";

export const context = createContext({
    name: '',
    setName: ()=>{},
    email:'',
    setEmail: ()=>{},
    password: '',
    setPassword: ()=>{},
    handleLogin:()=>{},
    handleRegister:()=>{},
})