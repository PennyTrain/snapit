import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axiosReq } from '../snapit_api/axiosDefaults';
import Comment from '../pages/comments/Comment';

function CommentsContainer({ snapId, setSnaps, setComments }) {
  const [comments, setCommentsState] = useState({ results: [] });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axiosReq.get(`/snapcomments/?snap=${snapId}`);
        setCommentsState(data);
        setComments(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchComments();
  }, [snapId, setComments]);

  return (
    <div>
      {comments.results.map(comment => (
        <Comment 
          key={comment.id} 
          {...comment} 
          setSnaps={setSnaps} 
          setComments={setCommentsState} 
        />
      ))}
    </div>
  );
}

CommentsContainer.propTypes = {
  snapId: PropTypes.number.isRequired,
  setSnaps: PropTypes.func.isRequired,
  setComments: PropTypes.func.isRequired,
};

export default CommentsContainer;
