import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom";

const ThreeDots = React.forwardRef(function ThreeDots({ onClick }, ref) {
  return (
    <i
      className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  );
});

function ProfileEditDropDown({ id }) {
  const history = useHistory();

  const handleEditProfile = () => {
    history.push(`/profiles/${id}/edit`);
  };

  const handleEditUsername = () => {
    history.push(`/profiles/${id}/edit/username`);
  };

  const handleEditPassword = () => {
    history.push(`/profiles/${id}/edit/password`);
  };

  return (
    <Dropdown className="ml-auto px-3" drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleEditProfile} aria-label="edit-profile">
          <i className="fas fa-edit" /> Edit profile
        </Dropdown.Item>
        <Dropdown.Item onClick={handleEditUsername} aria-label="edit-username">
          <i className="far fa-id-card" /> Change username
        </Dropdown.Item>
        <Dropdown.Item onClick={handleEditPassword} aria-label="edit-password">
          <i className="fas fa-key" /> Change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileEditDropDown;
