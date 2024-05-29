import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MoreDropDown } from "../../components/MoreDropDown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import EditComment from "./EditComment";

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated,
        body,
        id,
        setSnaps,
        setComments,
    } = props;

    const [editBody, setEditBody] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/snapcomments/${id}/`);
            setSnaps((prevSnap) => ({
                results: [
                    {
                        ...prevSnap.results[0],
                        snapcomments_count: prevSnap.results[0].snapcomments_count - 1,
                    },
                ],
            }));
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <img
                        src={profile_image}
                        alt={`${owner}'s profile`}
                        height={50}
                        width={50}
                        className="mr-3"
                    />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span>{owner}</span>
                    <span>{updated}</span>
                    {editBody ? (
                        <EditComment
                            id={id}
                            body={body}
                            setComments={setComments}
                            setEnableUpdate={setEditBody}
                        />
                    ) : (
                        <p>{body}</p>
                    )}
                </Media.Body>
                {is_owner && !editBody && (
                    <MoreDropDown
                        handleEdit={() => setEditBody(true)}
                        handleDelete={handleDelete}
                    />
                )}
            </Media>
        </>
    );
};

// Add prop-type validation
Comment.propTypes = {
    profile_id: PropTypes.number.isRequired,
    profile_image: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    setSnaps: PropTypes.func.isRequired,
    setComments: PropTypes.func.isRequired,
};

export default Comment;
