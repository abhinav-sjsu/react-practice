import { useContext } from 'react';
import { GlobalStateContext  } from "./ContextExample";



const ChildDisplay = ({  }) => {
    const { isToggle } = useContext(GlobalStateContext);
    return (
        <div>
            <p>Current State: {isToggle ? "ON" : "OFF"}</p>
        </div>
    );
}; export default ChildDisplay