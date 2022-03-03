import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import OfferProduct from './OfferProduct';

const CommentDetails = () => {

    const { id } = useParams();
    const [commentDetails, setCommentDetails] = useState({});
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => {
            setCommentDetails(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }, []);

    return (
        <div className='p-3'>
            {
                loading ? <p>Loading...</p> :
                <div>
                    <h4>{commentDetails.id}</h4>
                    <p>{commentDetails.name}</p>
                    <p>{commentDetails.email}</p>
                    <p>{commentDetails.body}</p>
                </div>
            }

            <Route path={`/comments/${id}/offers`}>
                <OfferProduct />
            </Route>
        </div>
    )
}

export default CommentDetails;
