import { useGlobalContext } from '../../globals/useContext';
import './badge.css';

function Badge({text}) {
    const { filtration } = useGlobalContext()

    return (
        <span className='roles badge p-2 tablets' onClick={(e) => {
            filtration(e);
        }}>
            <p className='text m-0 text-c-dark text-lmed'><b>{text}</b></p>
        </span>
    )
}

export default Badge;