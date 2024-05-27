import React, { useState, useEffect } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { axiosReq } from "../../snapit_api/axiosDefaults";
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
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search snaps"
          />
        </Form>
      </Container>

      {isReady ? (
        snaps.results.length ? (
          <InfiniteScroll
            dataLength={snaps.results.length}
            loader={<Container>Loading...</Container>}
            hasMore={!!snaps.next}
            next={() => fetchAdditionalDetails(snaps, setSnaps)}
          >
            <Row className="snap-row">
              {snaps.results.map((snap) => (
                <Col key={snap.id} xs={6} sm={6} md={4} lg={3}>
                  <Snap {...snap} setSnaps={setSnaps} />
                </Col>
              ))}
            </Row>
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
    </div>
  );
}

export default SnapsFeed;
