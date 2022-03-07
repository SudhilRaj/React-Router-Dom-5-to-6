import React, { useContext } from 'react'
import { commentsContext } from '../context/CommentsContext';
import { useNavigate } from 'react-router-dom';

const Comments = () => {
 
const [comments, loading] = useContext(commentsContext);
// There is no useHistory or Redirect, instead we have useNavigate
const navigate = useNavigate();

  return (
    <div className='p-3'>
        <h3>Comments</h3>
        <div className='row'>
            {
                comments.length > 0 ? 
                comments.map(comment => (
                    <div key={comment.id} className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-2' style={{border: '1px solid #000'}}>
                        <p>{comment.name}</p>
                        <small>{comment.email}</small> <br />
                        <button className='btn btn-primary btn-sm' onClick={() => navigate(`${comment.id}`)}>Details</button>
                        {/* Since nested routes are relative we don't need to pass the complete path */}
                    </div>
                ))
                :
                <p>No comments found!</p>
            }
        </div>
    </div>
  )
}

export default Comments;