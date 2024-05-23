import React, { useState, useEffect } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { axiosReq } from "../../snapit_api/axiosDefaults"; // Assuming axiosReq is imported from the correct path
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchAdditionalDetails } from "../../utils/utils";
import Snap from "./Snap";

function SnapsFeed({ message, filter = "" }) {
  const [snaps, setSnaps] = useState({ results: [] });
  const [isReady, setIsReady] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchSnaps = async () => {
      try {
        const { data } = await axiosReq.get(`/snaps/?${filter}search=${query}`);
        setSnaps(data);
        setIsReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    setIsReady(false);
    const timer = setTimeout(() => {
      fetchSnaps();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <div>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search snaps"
            />
          </Form>

          {isReady ? (
            snaps.results.length ? (
              <InfiniteScroll
                dataLength={snaps.results.length}
                loader={<Container>Loading...</Container>}
                hasMore={!!snaps.next}
                next={() => fetchAdditionalDetails(snaps, setSnaps)}
              >
                {snaps.results.map((snap) => (
                  <Snap key={snap.id} {...snap} setSnaps={setSnaps} />
                ))}
              </InfiniteScroll>
            ) : (
              <Container>
                {/* <Asset src={NoResults} message={message} /> */}
              </Container>
            )
          ) : (
            <Container>
              {/* <Asset spinner /> */}
            </Container>
          )}
        </Col>
        <Col>{/* <PopularProfiles /> */}</Col>
      </Row>
    </div>
  );
}

export default SnapsFeed;
