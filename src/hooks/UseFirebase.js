import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
        
                
                const user = userCredential.user;
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            }).finally(() => {
                setIsLoading(false)
            });
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state.from || '/home';
                history.replace(destination)
                setAuthError('');
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state.from || '/home';
                history.replace(destination)
                setAuthError('');
                const user = result.user;
                // ...
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            });
    }

    return {
        user, isLoading, authError,
        registerUser,googleSignIn,
        logout,
        loginUser
    }
}
export default useFirebase;