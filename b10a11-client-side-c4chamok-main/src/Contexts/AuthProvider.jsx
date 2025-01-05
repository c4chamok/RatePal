import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAdditionalUserInfo, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import axios from 'axios';
import { use } from 'react';
import AppStates from './AppStates';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [updated, setUpdated] = useState("")
    const [isNew, setIsNew] = useState(false)
    const { showSearchbar, setShowSearchbar, searchText, setSearchText } = AppStates()

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                const additionalInfo = getAdditionalUserInfo(result)
                console.log(result, additionalInfo)
                if (additionalInfo.isNewUser) {
                    axios.post('https://rate-pal-server.vercel.app/users', {
                        email: user.email,
                        name: user.displayName,
                        photo: user.photoURL
                    }).then((res) => {
                        console.log(res)
                    })
                }
            })
    }

    const login = (email, Password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, Password)
    }
    const register = (email, Password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, Password)
            .then((result) => {
                const additionalInfo = getAdditionalUserInfo(result)
                console.log(result, additionalInfo)
                if (additionalInfo.isNewUser) {
                    setIsNew(true)
                }
            })
    }

    useEffect(() => {
        if (isNew && user?.photoURL) {
            axios.post('https://rate-pal-server.vercel.app/users', {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL
            }).then((res) => {
                console.log(res)
                setIsNew(false)
            })
        }
    }, [user?.photoURL])

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
            .then(() => {
                setUpdated("Profile Updated")
            })
    }

    useEffect(() => {
        const authUnmount = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            try {
                if (currentUser?.email) {
                    axios.post('https://rate-pal-server.vercel.app/jwt', {
                        email: currentUser.email
                    },
                        {
                            withCredentials: true
                        })
                        .then((res) => {
                            console.log("login", res.data)
                        })
                } else {
                    axios.delete('https://rate-pal-server.vercel.app/jwt', {
                        withCredentials: true
                    }).then((res) => {
                        console.log('logout', res.data)
                    })
                }
            } finally {
                setLoading(false);

            }

        })
        return () => authUnmount()
    }, [updated])

    const contextInfo = { login, register, logout, user, loading, updateUserProfile, googleSignIn, showSearchbar, setShowSearchbar, searchText, setSearchText }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;