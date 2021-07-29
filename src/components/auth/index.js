import React, { useState } from 'react';
import Login from "./Login";
import Register from "./Register";

const Index = () => {
    const [openLogin, setOpenLogin] = useState(false)

    const onToggle = () => {
        setOpenLogin(!openLogin)
    }

    return openLogin ?
               <Login onToggle={onToggle}/> : <Register onToggle={onToggle}/>

};

export default Index;