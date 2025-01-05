import { useContext } from 'react';
import { GlobalStateContext  } from "./ContextExample";

const ChildToggle = ({  }) => {
    const { setIsToggle } = useContext(GlobalStateContext);
    return (
        <div>
            <button onClick={() => setIsToggle((prev) => (!prev))}>Toggle State</button>
        </div>
    );
}; export default ChildToggle