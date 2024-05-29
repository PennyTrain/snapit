import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { useProfileDetail } from "../../contexts/ProfileDetailContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
    const { popularProfiles } = useProfileDetail();
    return (
        <Container>
            {popularProfiles.results.length ? (
                <>
                    <p>Followed profiles</p>
                    {mobile ? (
                        <div>
                            {popularProfiles.results.slice(0, 4).map((profile) => (
                                <Profile key={profile.id} profile={profile} mobile={mobile} />
                            ))}
                        </div>
                    ) : (
                        popularProfiles.results.map((profile) => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    )}
                </>
            ) : (
                <p>Needs a spinner</p>
            )}
        </Container>
    );
};

PopularProfiles.propTypes = {
    mobile: PropTypes.bool.isRequired,
};

export default PopularProfiles;
