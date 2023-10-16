import { createContext, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUsers = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    

    const AuthInfo = {
      user,
      loading,
      createUsers,
      singInUser,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;