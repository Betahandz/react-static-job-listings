import React, { useContext, createContext, useState, useEffect } from "react";
import data from './../assets/data/data.json';

// create app context
const AppContext = createContext();

// create app provider
const AppProvider = ({children}) => {
    const [ employees, setEmployees ] = useState([]);

    
    const [ filterate, setFilterate ] = useState(['Python', 'Javascript', 'Frontend', 'Senior']);
    
    
    useEffect(() => {
        setEmployees(data);
    }, [])
    
    const filtration = (e) => {
        let filterItem = e.currentTarget.textContent;
        const sieve = new Set([...filterate]);
        sieve.add(filterItem);
        setFilterate(prev => [...sieve]);
        setEmployees(prev => {
            const newEmployees = [];
            data.forEach(item => {
                const { role, level, languages, tools } = item;
                const checkArray = [role, level, ...languages, ...tools];
                console.log(filterate);
                // filterate.map(filtItem => {
                //     const check = checkArray.includes(filtItem);
                //     if(check) {
                //         return item;
                //     }
                // })
                filterate.forEach(filtItem => {

                    checkArray.filter(checkItem => {
                        if(filtItem === checkItem) {
                            // console.log(item);
                            // return item;
                            newEmployees.push(item);
                        }
                    })
                })
            })

            console.log(newEmployees);
            return newEmployees;
        })
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