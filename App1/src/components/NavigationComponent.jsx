import {NavLink} from 'react-router-dom'
export const NavigationComponent = () => {
    return <>
            <>
        <nav className="mt-5 border-t-2 border-b-2 border-black px-4 py-5 relative top-0 w-full">
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-white mr-5'to='/'>Home</NavLink>
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-white mr-5'to='/blogs'>Blogs</NavLink>
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-white mr-5'to='/account'>Get In Touch</NavLink>
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-white mr-5'to='/addblog'>Add Blog</NavLink>
        </nav>
        </>
    </>
};