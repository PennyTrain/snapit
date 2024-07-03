import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axiosReq } from "../snapit_api/axiosDefaults";
import Comment from "../pages/comments/Comment";

// The CommentsContainer component fetches comments related to a specific snap 
// (snapId) from an API and stores them in state, also updating a parent state 
// via setComments. It uses useEffect to perform the data fetch when the component 
// mounts or when snapId changes. The component maps over the fetched comments to
//  render individual Comment components, passing necessary props to each.


function CommentsContainer({ snapId, setComments, setSnaps }) {
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
                    pet_age={String(comment.pet_age)}
                    setSnaps={setSnaps} 
                    setComments={setCommentsState}
                />
            ))}
        </div>
    );
}

CommentsContainer.propTypes = {
    snapId: PropTypes.number.isRequired,
    setComments: PropTypes.func.isRequired,
    setSnaps: PropTypes.func.isRequired,
};

export default CommentsContainer;
