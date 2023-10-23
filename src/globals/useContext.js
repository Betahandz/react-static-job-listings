import React, { useContext, createContext, useState, useEffect } from "react";
import data from './../assets/data/data.json';

// create app context
const AppContext = createContext();

// create app provider
const AppProvider = ({children}) => {
    const [ employees, setEmployees ] = useState(data);

    
    const [ filterate, setFilterate ] = useState([]);
    
    useEffect(() => {
        const newEmployees = data.find(item => {
            const { role, level, languages, tools } = item;

            return role;
        })
        console.log(newEmployees);
    }, [filterate])
    
    const filtration = (e) => {
        let filterItem = e.currentTarget.textContent;
        const sieve = new Set([...filterate]);
        sieve.add(filterItem);
        setFilterate(prev => [...sieve]);
    }

    const clearSingle = (e) => {
        const name = e.currentTarget.previousSibling.textContent;
        setFilterate(prev => {
            const newFilterate = filterate.filter(item => item !== name);
            return newFilterate;
        })
    }
    

    const clearAll = () => {
        setFilterate(prev => []);
        setEmployees(prev => data);
    }

    const propDrills = {
        employees,
        filtration,
        filterate,
        clearAll,
        clearSingle
    }

    return <AppContext.Provider value={propDrills}>{children}</AppContext.Provider>
}

// customize context
const useGlobalContext = () => useContext(AppContext);

// exporting
export { useGlobalContext, AppProvider as default }