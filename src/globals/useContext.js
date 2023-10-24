import React, { useContext, createContext, useState, useEffect } from "react";
import data from './../assets/data/data.json';

// create app context
const AppContext = createContext();

// create app provider
const AppProvider = ({children}) => {
    const [ employees, setEmployees ] = useState([]); // normal data all the data
    const [ filterate, setFilterate ] = useState([]); // array of data to be filtered

    useEffect(() => {
        if(filterate.length < 1) {
            setEmployees(prev => data);
        } else {
            let  newEmployees = data.map(singledata => {
                const {role, level, languages, tools } = singledata;
                const checkArray = [role, level, ...languages, ...tools];
                let employee;
                filterate.forEach(item => {
                    for(let x = 0; x < checkArray.length; x++){
                        if(item === checkArray[x]) {
                            employee = singledata;
                        }
                    }
                })
                return employee;
            }) // new employee will bring some undefined values
            newEmployees = newEmployees.filter(workers => workers !== undefined); // filtering the undefined values
            setEmployees(newEmployees); // setting data to the new filtered values
        }
    }, [filterate])

    const filtration = (e) => {
        let filterItem = e.currentTarget.textContent;
        if(filterate.includes(filterItem)) {
            return;
        } else {
            setFilterate(prev => [...prev, filterItem]);
        }
    }

    const clearSingle = (e) => {
        const name = e.currentTarget.previousSibling.textContent;
        setFilterate(prev => {
            const newFilterate = filterate.filter(item => item !== name);
            return newFilterate;
        })
    }
    

    const setToDefault = () => {
        setFilterate(prev => []);
        setEmployees(prev => data);
    }

    const propDrills = {
        employees,
        filtration,
        filterate,
        setToDefault,
        clearSingle
    }

    return <AppContext.Provider value={propDrills}>{children}</AppContext.Provider>
}

// customize context
const useGlobalContext = () => useContext(AppContext);

// exporting
export { useGlobalContext, AppProvider as default }