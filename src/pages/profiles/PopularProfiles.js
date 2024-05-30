import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { useProfileDetail } from "../../contexts/ProfileDetailContext";
import Profile from "./Profile";
/*

The PopularProfiles component renders a list of popular profiles, 
retrieved from the ProfileDetailContext. It adjusts its layout 
based on the mobile prop, displaying a subset of profiles if it's 
true. Each profile is rendered using the Profile component. Additionally, 
it handles cases where there are no popular profiles available by displaying 
a message indicating the need for a spinner component.
 */
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
