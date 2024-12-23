import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '/src/assets/home-icon.svg'
import chevrons from '/src/assets/breadcrumb-chevrons.svg'
import { usePageContext } from '../../contexts/PageProvider'
import { useNavbarStatus } from '/src/contexts/NavbarStatusProvider'


const Breadcrumb = () => {

    const { currentPage } = usePageContext();
    const { expandMenu } = useNavbarStatus();

    const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section className={!expandMenu ? `breadcrumb bc-${currentPage}` : `breadcrumb bc-padding bc-${currentPage}`}>
        <div className="container">
            <ul className='breadcrumb'>
                <li className='fs-1'><img src={homeIcon} alt="House icon" /><Link to="/">Homepage</Link><img src={chevrons} alt="chevrons" /></li>
                {
                    pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return (
                            <li key={to}>
                                { index === pathnames.length -1
                                    ? (<span className='fs-1'>{value.replace(/-/g, ' ')}</span>)
                                    : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Breadcrumb