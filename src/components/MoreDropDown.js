import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import { useMessages } from '../contexts/MessageContext';

  /* 
This code defines a React component called MoreDropDown, 
which renders a dropdown menu with options for editing and 
deleting items. It utilizes the Dropdown component from 
React Bootstrap and customizes its appearance with font 
awesome icons. The component requires two functions, 
handleEdit and handleDelete, as props to handle user 
interactions for editing and deleting items respectively.
*/
/**
 * Renders a dropdown menu with options for editing and deleting items.
 * @param {Object} props - The component props.
 * @param {Function} props.handleEdit - Function to handle edit action.
 * @param {Function} props.handleDelete - Function to handle delete action.
 * @returns {JSX.Element} A dropdown menu component.
 */
export const MoreDropDown = function MoreDropDown({ handleEdit, handleDelete }) {
  const { addMessage } = useMessages();
  

  const handleDeleteWithMessage = async () => {
    try {
      await handleDelete();
      addMessage({ type: 'success', text: 'Item deleted successfully!' });
    } catch (error) {
      addMessage({ type: 'danger', text: 'Failed to delete item.' });
    }
  };

  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu className="text-center" popperConfig={{ strategy: "fixed" }}>
        <Dropdown.Item onClick={handleEdit} aria-label="edit">
          <i className="fas fa-edit" /> Edit
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDeleteWithMessage} aria-label="delete">
          <i className="fas fa-trash-alt" /> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

MoreDropDown.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

/**
 * Renders a three dots icon.
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - Function to handle click action.
 * @returns {JSX.Element} A three dots icon.
 */
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

ThreeDots.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MoreDropDown;
