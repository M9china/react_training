import {useParams} from "react-router-dom"
import { Link} from 'react-router-dom'
export const OneBlogComponent = () => {
    const {id} = useParams()
    return <>
    <Link to={`/blogs/${id}`}></Link>
    <h1>One {id} </h1>
    </>
};

