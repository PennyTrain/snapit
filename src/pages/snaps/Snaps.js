import React from "react"
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Button, Media } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Snap(props) {
  const {
    id, owner, profile_id, profile_image, snapcomments_count, snaplikes_count, snaplike_id, title, body, featured_image, updated, snapFeed,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card style={{ width: '18rem' }}>
      <Media>
      <Card.Img variant="top" src={featured_image} />
      </Media>
      <Card.Body>
        <Link to = {`/profiles/${profile_id}`}>
          {owner}
        </Link>
        <Card.Title></Card.Title>
        <Card.Text>
        {body}
        {snaplikes_count}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Snap;