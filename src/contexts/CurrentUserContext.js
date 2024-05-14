import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CurrentUserContext = React.createContext();
const SetCurrentUserContext = React.createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axios.get('dj-rest-auth/user/');
                setCurrentUser(data);
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};