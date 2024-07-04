import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from '../../snapit_api/axiosDefaults';
import Snap from '../snaps/Snap';
import { Col, Row, Container, Button } from "react-bootstrap";
import CommentCreateForm from '../comments/CreateComment';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentsContainer from "../../components/CommentsContainer";
import styles from "../../styles/SnapFeed.module.css";


// The SnapFeed component fetches and displays details of a specific 
// snap and its associated comments based on the id parameter from the 
// URL. It uses useEffect to perform API requests upon component mount, 
// fetching both the snap details and comments asynchronously. The component 
// conditionally renders the snap and its comments using the Snap and CommentsContainer 
// components, respectively, and optionally displays a comment creation form when the 
// user is logged in, controlled by showCommentForm state toggled via a button click.

function SnapFeed() {
  const { id } = useParams(); // Ensure the snap ID from URL params is used
  const snapId = Number(id); // Convert snapId to a number
  const [snap, setSnap] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  const [showCommentForm, setShowCommentForm] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: snap }, { data: comments }] = await Promise.all([
          axiosReq.get(`/snaps/${snapId}`),
          axiosReq.get(`/snapcomments/?snap=${snapId}`),
        ]);
        setSnap({ results: [snap] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [snapId]);

  const handleShowCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  return (
    <Row>
      <Col className={styles.col}>
        {snap.results.length > 0 && (
          <>
            <Snap {...snap.results[0]} setSnaps={setSnap} />
            <Container>
              <CommentsContainer
                snapId={snapId}
                setSnaps={setSnap}
                comments={comments}
                setComments={setComments}
              />
            </Container>
            {currentUser && (
              <>
                <Button className={styles.commentbutton} onClick={handleShowCommentForm}>
                  {showCommentForm ? "Close Comment Form" : "Add Comment"}
                </Button>
                {showCommentForm && (
                  <CommentCreateForm
                    snapId={snapId}
                    setSnaps={setSnap}
                    setComments={setComments}
                    profileImage={currentUser?.profile_image}
                    profile_id={currentUser?.profile_id}
                  />
                )}
              </>
            )}
          </>
        )}
      </Col>
    </Row>
  );
}

export default SnapFeed;
