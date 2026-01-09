import { createContext, useContext, useState, useEffect } from 'react';
import { sports as initialSports, schools as initialSchools, teams as initialTeams, players as initialPlayers, items as initialItems } from '../data/mockData';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [sports, setSports] = useState(initialSports);
    const [schools, setSchools] = useState(initialSchools);
    const [teams, setTeams] = useState(initialTeams);
    const [players, setPlayers] = useState(initialPlayers);
    const [items, setItems] = useState(initialItems);

    // Initialize from local storage if available, else usage mock data
    // For simplicity in this demo, we'll just stick to state that resets on reload 
    // unless we actively sync with localStorage. 
    // Let's rely on the initial state for now.

    const addPlayer = (player) => {
        setPlayers(prev => [...prev, { ...player, id: `player-${Date.now()}` }]);
    };

    const addItem = (item) => {
        setItems(prev => [...prev, { ...item, id: `item-${Date.now()}` }]);
    };

    const deleteItem = (itemId) => {
        setItems(prev => prev.filter(i => i.id !== itemId));
    };

    const value = {
        sports,
        schools,
        teams,
        players,
        items,
        addPlayer,
        addItem,
        deleteItem
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
