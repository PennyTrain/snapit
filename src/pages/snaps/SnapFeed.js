import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from '../../snapit_api/axiosDefaults';
import Snap from '../snaps/Snap';
import { Col, Row, Container } from "react-bootstrap";
import CommentCreateForm from '../comments/CreateComment';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import CommentsContainer from "../../components/CommentsContainer"; // Import CommentsContainer

function SnapFeed() {
    const { id } = useParams();
    const [snap, setSnap] = useState({
        results: []
    });
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: snap }] = await Promise.all([
                    axiosReq.get(`/snaps/${id}`),
                ]);
                setSnap({ results: [snap] });
                console.log(snap);
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

    return (
        <Row>
            <Col>
                {snap.results.length > 0 && (
                    <>
                        <Snap {...snap.results[0]} setSnaps={setSnap} />
                        <Container>
                            <CommentsContainer snapId={id} />
                        </Container>
                        <CommentCreateForm
                            snapId={id}
                            setSnaps={setSnap}
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
