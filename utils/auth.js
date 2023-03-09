import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

const USER_STUBS = {
    COUNT:{
        email: "count@gmail.com",
    },
    NONE: null,
};

const AuthProvider = (props) => {
   const [user, setUser] = useState[USER_STUBS.COUNT];
    const handleLogin= ({email}) =>  { 
        //nothing yet
        setUser ({email});
}  
 return <AuthContext.Provider value = {{user, handleLogin}} {...props}/>;
};
 const useAuth  = () => useContext(AuthContext);
export {AuthProvider, useAuth};
