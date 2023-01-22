import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const modernizeProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        localStorage.removeItem('token');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, []);


//Rakibul islam donation context start
    const [currentStepData, setCurrentStepData] = useState(1);
    const [userData, setUserData] = useState([]);
    const [stepperFinalData, setStepperFinalData] = useState([]);

    const submitStepperFinalData = () => {
        setStepperFinalData((data) => [...data, userData]);
        setUserData("");
        setCurrentStepData(1);
    };
//Rakibul islam donation context end

    const authInfo = {
        user, loading, createUser, login, logOut, modernizeProfile, currentStepData,
        setCurrentStepData,
        userData,
        setUserData,
        stepperFinalData,
        setStepperFinalData,
        submitStepperFinalData,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;