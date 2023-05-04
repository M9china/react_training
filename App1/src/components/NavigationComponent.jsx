import {NavLink} from 'react-router-dom'
export const NavigationComponent = () => {
    return <>
            <>
        <nav className="navBar">
            <NavLink className={'navigation'}to='/'>Home</NavLink>
            <NavLink className={'navigation'}to='/blogs'>Blogs</NavLink>
            <NavLink className={'navigation'}to='account'>Create free account</NavLink>
        </nav>
        </>
    </>
};