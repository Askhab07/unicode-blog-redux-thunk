import { upload } from '@testing-library/user-event/dist/upload';
import React, { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadPosts } from '../../store/reducer/postsReducer';
import './Description.css'

const Description = () => {
    const { isLoading, posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const { id } = useParams();
  
    useEffect(() => {
      dispatch(uploadPosts());
    }, []);

    const post = posts.find((item) => item._id === id);


    if (isLoading) {
        return (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        );
      }

    return (
        <div className='description__descr'>
            <img src={post?.image} alt="" />
            <h2>{post?.title}</h2>
            <p>{post?.text}</p>
        </div>
    );
};

export default Description;