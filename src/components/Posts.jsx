import React from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostItem } from '../actions/posts';

const Posts = ({ postItems }) => {
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div style={{ display: "flex", margin: "2rem" }}>
                {
                    postItems.map((post, index) =>
                        <div key={post.id} className="card" style={{ width: "300px", border: "1px solid #000", padding: "20px", textAlign: 'center' }}>
                            <div className="card-body">
                                <h1 className="card-title">{post.title}{post.id}</h1>
                                <p className="card-text">{post.body}</p>
                                <button
                                    className="btn btn-danger"
                                    onClick={()=> dispatch(deletePostItem(post.id, index))}>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
}

export default Posts;