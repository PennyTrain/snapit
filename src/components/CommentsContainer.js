import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axiosReq } from '../snapit_api/axiosDefaults';
import Comment from '../pages/comments/Comment';

function CommentsContainer({ snapId, setSnaps }) {
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axiosReq.get(`/snapcomments/?snap=${snapId}`);
        setComments(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchComments();
  }, [snapId]);

  return (
    <div>
      {comments.results.map(comment => (
        <Comment 
          key={comment.id} 
          {...comment} 
          setSnaps={setSnaps} 
          setComments={setComments} 
        />
      ))}
    </div>
  );
}

CommentsContainer.propTypes = {
  snapId: PropTypes.number.isRequired,
  setSnaps: PropTypes.func.isRequired,
};

export default CommentsContainer;
