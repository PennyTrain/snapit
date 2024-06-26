import React, { useState } from "react";
import PropTypes from "prop-types";
import { Media, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MoreDropDown } from "../../components/MoreDropDown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import EditComment from "./EditComment";
import styles from "../../styles/Comment.module.css";
/*
The Comment component renders individual comments within a snap, 
including the owner's profile image, name, the comment body, and 
the date it was updated. It allows the owner to edit or delete 
their comments, utilizing state and context to manage and update 
the comments and snaps. Prop types are used to ensure proper data 
is passed to the component, maintaining type safety and avoiding runtime errors.
 */

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated,
        body,
        id,
        attachment,
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
            <Media className={styles.comment}>
                <Link to={`/profiles/${profile_id}`}>
                    <img
                        src={profile_image}
                        alt={`${owner}'s profile`}
                        className="mr-3"
                        height={50}
                        width={50}
                    />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <div className={styles.commentHeader}>
                        <span className={styles.commentText}>{owner}, {updated}</span>
                        {attachment && (
                            <Button variant="link" href={attachment} target="_blank" className={styles.attachmentButton}>
                                <i className="fas fa-paperclip"></i>
                            </Button>
                        )}
                    </div>
                    {editBody ? (
                        <EditComment
                            id={id}
                            body={body}
                            attachment={attachment}
                            setComments={setComments}
                            setEnableUpdate={setEditBody}
                        />
                    ) : (
                        <p className={styles.commentText}>{body}</p>
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

Comment.propTypes = {
    profile_id: PropTypes.number.isRequired,
    profile_image: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    attachment: PropTypes.string,
    setSnaps: PropTypes.func.isRequired,
    setComments: PropTypes.func.isRequired,
};

export default Comment;
