import {NavLink} from 'react-router-dom'
export const FooterComponent = () =>{
    return(
        <>
          <footer className="footer">
          <NavLink className={'navigation'}to='https://github.com/M9china'>GitHub</NavLink>
            <NavLink className={'navigation'}to='https://twitter.com/Nqobile60227239'>Twitter</NavLink>
            <NavLink className={'navigation'}to='https://facebook.com'>Facebook</NavLink>
      </footer>
        
        </>
    )
};