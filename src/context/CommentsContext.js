import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const commentsContext = createContext();

export const CommenstProvider = (props) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/comments?_limit=24')
        .then(res => {
            setComments(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }, []);

    return (
        <commentsContext.Provider value={[comments, loading]}>
            {props.children}
        </commentsContext.Provider>
    )
}


