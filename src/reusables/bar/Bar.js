import { useGlobalContext } from '../../globals/useContext';
import './bar.css';

function Bar({text}) {
    const {clearSingle} = useGlobalContext();
    return (
        <div className='specialty tablets d-flex align-items-stretch'>
            <span className='text p-1 text-c-dark'>
                <b>{text}</b>
            </span>
            <span className='close badge bg-dark-cyan rounded-0 d-flex align-items-center justify-content-center' onClick={(e) => clearSingle(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
            </span>
        </div>
    )
}

export default Bar;