import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostList from '../components/PostList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserPosts = () => {
  const [loadedPosts, setLoadedPosts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/posts/user/${userId}`
        );
        setLoadedPosts(responseData.posts);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest, userId]);

  const postDeleteHandler = deletedPostId => {
    setLoadedPosts(prevPosts =>
      prevPosts.filter(post => post.id !== deletedPostId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPosts && (
        <PostList items={loadedPosts} onDeletePost={postDeleteHandler} />
      )}
    </React.Fragment>
  );
};

export default UserPosts;
