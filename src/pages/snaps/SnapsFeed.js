import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { axiosReq } from "../../snapit_api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import Snap from "./Snap";
import styles from "../../styles/SnapsFeed.module.css";

function SnapsFeed({ message, filter = "" }) {
  const [snaps, setSnaps] = useState({ results: [] });
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    let mounted = true; // Flag to track mounted status

    const fetchSnaps = async () => {
      try {
        const { data } = await axiosReq.get(`/snaps/?${filter}search=${query}`);
        if (mounted) {
          setSnaps(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    setHasMore(true);
    const timer = setTimeout(() => {
      fetchSnaps();
    }, 1000);

    return () => {
      mounted = false; // Component is unmounting, update mounted flag
      clearTimeout(timer); // Clear timeout to prevent memory leaks
    };
  }, [filter, query, pathname]);

  const fetchMoreData = async () => {
    if (snaps.next) {
      try {
        const { data } = await axiosReq.get(snaps.next);
        setSnaps((prevSnaps) => ({
          ...data,
          results: [...prevSnaps.results, ...data.results],
        }));
      } catch (err) {
        console.log(err);
      }
    } else {
      setHasMore(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder="Search snaps"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form.Group>
      </Form>
      {snaps.results.length ? (
        <InfiniteScroll
          dataLength={snaps.results.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className={styles.snapsList}>
          {snaps.results.map((snap) => (
            <Snap key={snap.id} {...snap} setSnaps={setSnaps} />
          ))}
          </div>
        </InfiniteScroll>
      ) : (
        <Container>
          <h4>{message}</h4>
        </Container>
      )}
    </Container>
  );
}

SnapsFeed.propTypes = {
  message: PropTypes.string.isRequired,
  filter: PropTypes.string,
};

export default SnapsFeed;
