import './singleworker.css';
import Badge from '../badge/Badge';

function Singleworker({company, logo, nuew, featured, position, role, level, postedAt, contract, location, languages, tools}) {
    const roleAndLanguages = [role, level, ...languages, ...tools]
    return (
        <div className={`singleworker bg-light rounded-3 p-2 py-3 mt-4 shadow featured px-md-5 d-md-flex justify-content-between align-items-center`}>
            <div className='programmer pt-4 pt-md-0 d-md-flex align-items-center'>
                <div className='logo'>
                    <img src={logo} alt='logo' className='img-fluid' />
                </div>
                <div className='details mt-2 mt-md-0'>
                    <div className='company d-flex'>
                        <h6 className='company m-0 text-c-dark text-lbold'>{company}</h6>
                        {
                            nuew && <span className='badge mx-3 text-lmed rounded-4 bg-dark-cyan d-flex align-items-center justify-content-center'>
                                <b className='mt-0'>NEW!</b>
                            </span>
                        }
                        {
                            featured && <span className='badge rounded-4 bg-dark text-lmed d-flex align-items-center justify-content-center'>
                                <b className='mt-0 text-uppercase'>featured</b>
                            </span>
                        }
                    </div>
                    <p className='position m-0 my-md-1 text-lbold'><b>{position}</b></p>
                    <ul className='time-posted px-0 d-flex'>
                        <li className='day text-gray text-lreg'>{postedAt}</li>
                        <li className='contract mx-4 text-gray text-lreg'>{contract}</li>
                        <li className='location text-gray text-lreg'>{location}</li>
                    </ul>
                </div>
            </div>

            <div className='lang d-flex flex-wrap pt-3 pt-md-0'>
                {
                    roleAndLanguages.map((item, index) => {
                        return <Badge 
                            key={index}
                            text={item}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default Singleworker;