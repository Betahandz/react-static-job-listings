import './app.css';
import Singleworker from './reusables/singleworker/Singleworker';
import Bar from './reusables/bar/Bar';
import { useGlobalContext } from './globals/useContext';


function App() {
    const {  employees, filterate, clearAll } = useGlobalContext();

    return (
        <div className='app-container container-fluid px-0'>
            <div className='bg'></div>
            <div className='workers-display container'>

                <div className={`filter-search bg-light shadow rounded-3 align-items-stretch ${filterate.length > 0 ? 'd-flex' : 'd-none'}`}>
                    <div className='niche-bar w-75 rounded-3 p-2 d-flex align-items-center flex-wrap'>
                        {
                            filterate.map(item => {
                                return <Bar
                                    text={item}
                                    key={item}
                                />
                            })
                        }
                    </div>
                    <div className='clear d-flex align-items-center justify-content-center w-25'>
                        <button className='clear-btn btn text-c-dark text-lreg' onClick={() => clearAll()}><b>Clear</b></button>
                    </div>
                </div>

                <div className='all-workers my-3 py-2'>
                    {
                        employees.map(item => {
                            return <Singleworker
                                key={item.id}
                                {...item}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App;