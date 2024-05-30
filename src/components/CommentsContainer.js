import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axiosReq } from '../snapit_api/axiosDefaults'
import Comment from '../pages/comments/Comment'

/*
This React component, CommentsContainer, manages the display of comments 
associated with a specific snap. It utilizes React's useEffect hook to 
fetch comments from the server upon component mounting, filtering the 
results based on the provided snapId. Once comments are retrieved, it 
renders each comment using the Comment component, passing down the 
necessary props.
*/

function CommentsContainer({ snapId }) {
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    // Fetch comments from the server upon component mounting
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

  
  const filteredComments = comments.results.filter(comment => comment.snap === snapId);

  return (
    <div>
      {filteredComments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

CommentsContainer.propTypes = {
  snapId: PropTypes.number.isRequired,
};

export default CommentsContainer;
