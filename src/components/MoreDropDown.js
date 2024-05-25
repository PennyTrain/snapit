import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

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

export const MoreDropDown = function MoreDropDown({ handleEdit, handleDelete }) {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu className="text-center" popperConfig={{ strategy: "fixed" }}>
        <Dropdown.Item onClick={handleEdit} aria-label="edit">
          <i className="fas fa-edit" /> Edit
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDelete} aria-label="delete">
          <i className="fas fa-trash-alt" /> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MoreDropDown;
