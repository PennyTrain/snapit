import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from '../../snapit_api/axiosDefaults';
import Snap from "./Snaps";
import { Col, Row, Container } from "react-bootstrap";


function SnapFeed() {
    const { id } = useParams();
    const [snap, setSnap] = useState({
        results: [ ]
    });
    useEffect (() => {
        const handleMount = async () => {
            try {
                const [{ data: snap }] = await Promise.all([
                    axiosReq.get(`/snaps/${id}`),
                ])
                    setSnap({results: [snap]});
                    console.log(snap)
            } catch (err) {
                console.log(err )
            }
        };
        handleMount();
    }, [id]);

    return (
        <Row>
          <Col>
            <Snap {...snap.results[0]} setSnaps={setSnap} postSnap />
            <Container>Comments</Container>
          </Col>
        </Row>
      );
    }

export default SnapFeed;