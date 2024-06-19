import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from '../../snapit_api/axiosDefaults';
import Snap from '../snaps/Snap';
import { Col, Row, Container } from "react-bootstrap";
import CommentCreateForm from '../comments/CreateComment';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentsContainer from "../../components/CommentsContainer";

function SnapFeed() {
    const { id } = useParams(); // Ensure the snap ID from URL params is used
    const snapId = Number(id); // Convert snapId to a number
    const [snap, setSnap] = useState({ results: [] });
    const [comments, setComments] = useState({ results: [] });
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
                console.log({snapId})
                console.log({snap})
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [snapId]);

    return (
        <Row>
            <Col>
                {snap.results.length > 0 && (
                    <>
                        <Snap {...snap.results[0]} setSnaps={setSnap} />
                        <Container>
                            <CommentsContainer snapId={snapId} setSnaps={setSnap} setComments={setComments} />
                        </Container>
                        <CommentCreateForm
                            snapId={snapId}
                            setSnaps={setSnap}
                            setComments={setComments}
                            profileImage={currentUser?.profile_image}
                            profile_id={currentUser?.profile_id}
                        />
                    </>
                )}
            </Col>
        </Row>
    );
}

export default SnapFeed;
