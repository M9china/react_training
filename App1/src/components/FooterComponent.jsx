import { NavLink } from 'react-router-dom'
export const FooterComponent = () => {
  return (
    <>
      <div className="relative bottom-0 w-full">
        <footer className="border-t-2 border-black mt-20">
          <div className="container mx-auto px-4">
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-white mr-5' to='https://github.com/M9china'>GitHub</NavLink>
            <NavLink className='text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-white mr-5' to='https://twitter.com/Nqobile60227239'>Twitter</NavLink>
            <NavLink className=' text-xl block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:text-white mr-5 ' to='https://facebook.com'>Facebook</NavLink>
          </div>
        </footer>
      </div>

    </>
  )
};