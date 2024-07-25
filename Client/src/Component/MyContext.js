import React, {Children, createContext, useContext, useState} from 'react';
// Create a Context
const MyContext= createContext();
//Create a provider component
const MyProvider = ({children}) => {
    const [user, setUser]= useState('')
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [toggle, setToggle]= useState(false);
    const [info, setInfo]= useState("");
    const [password, setPassword]=useState("")
    const [admin,setAdmin]= useState(false)
    return (
        <MyContext.Provider value={{user, setUser, email, setEmail, name, setName, tel, setTel, info, setInfo, password,setPassword, toggle, setToggle, admin, setAdmin}}>
            {children}
        </MyContext.Provider>
    );
};
export {MyProvider,MyContext};