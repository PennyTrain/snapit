// import React from "react";
// import { useHistory, useParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Alert from "react-bootstrap/Alert";
// import { axiosRes } from "../../snapit_api/axiosDefaults";

// const ProfileDelete = () => {
//   const { id } = useParams();
//   const history = useHistory();

//   const handleDelete = async () => {
//     try {
//       await axiosRes.delete(`/profiles/${id}/`);
//       history.push("/"); // Redirect to the homepage after deletion
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Container className="text-center">
//       <Alert variant="warning">
//         Are you sure you want to delete your profile? This action cannot be undone.
//       </Alert>
//       <Button variant="danger" onClick={handleDelete}>
//         Delete
//       </Button>
//       <Button variant="secondary" onClick={() => history.goBack()}>
//         Cancel
//       </Button>
//     </Container>
//   );
// };

// export default ProfileDelete;
