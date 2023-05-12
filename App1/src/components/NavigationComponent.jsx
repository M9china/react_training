import {NavLink} from 'react-router-dom'
export const NavigationComponent = () => {
    return <>
            <>
            {/* <div className="flex justify-between items-center"> */}
                <button className="rounded-full bg-slate-600 h-10 w-auto pr-5 pl-5 fixed top-6 right-6 text-white">Subscribe</button>
            {/* </div> */}
        <nav className="mt-20 border-t-2 border-b-2 border-black px-4 py-5 relative top-0 w-full">
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-gray-700 mr-5'to='/'>Home</NavLink>
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-gray-700 mr-5'to='/blogs'>Blogs</NavLink>
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-gray-700 mr-5'to='/account'>Get In Touch</NavLink>
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-gray-700 mr-5'to='/addblog'>Create Your Blog</NavLink>
        </nav>
        </>
    </>
};