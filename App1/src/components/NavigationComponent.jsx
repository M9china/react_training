import {NavLink} from 'react-router-dom'
export const NavigationComponent = () => {
    return <>
            <>
        <nav>
            <NavLink className={'navigation'}to='/'>Home</NavLink>
            <NavLink className={'navigation'}to='/blogs'>Blogs</NavLink>
        </nav>
        </>
    </>
};