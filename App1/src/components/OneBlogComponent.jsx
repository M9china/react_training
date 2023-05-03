import {useParams} from "react-router-dom"
export const OneBlogComponent = () => {
    const {id} = useParams()
    return <>
    <h1>One {id} </h1>
    </>
};

