import { createContext, useState } from 'react';
import ChildToggle from './ChildToggle';
import ChildDisplay from './ChildDisplay';
export const GlobalStateContext = createContext(null);

const ContextExample = () => {

    const [isToggle, setIsToggle] = useState(false);

    return (
    <GlobalStateContext.Provider value = {{ isToggle, setIsToggle}}>
        <div>
            <h1>Parent Component</h1>
            <ChildToggle/>
            <ChildDisplay/>
        </div>
    </GlobalStateContext.Provider>
    );
};export default ContextExample;

