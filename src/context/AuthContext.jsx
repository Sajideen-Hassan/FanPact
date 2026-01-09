import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    // Check local storage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAdmin(parsedUser.role === 'admin');
        }
    }, []);

    const login = (email, password) => {
        // Mock login logic
        if (email === 'admin@example.com' && password === 'admin123') {
            const adminUser = { id: 'admin1', name: 'Admin User', email, role: 'admin' };
            setUser(adminUser);
            setIsAdmin(true);
            localStorage.setItem('user', JSON.stringify(adminUser));
            return true;
        } else if (email && password) {
            const customerUser = { id: 'user1', name: 'Customer User', email, role: 'customer' };
            setUser(customerUser);
            setIsAdmin(false);
            localStorage.setItem('user', JSON.stringify(customerUser));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setIsAdmin(false);
        localStorage.removeItem('user');
    };

    const value = {
        user,
        isAdmin,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
