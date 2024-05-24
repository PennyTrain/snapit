import React from "react";
import { Container } from "react-bootstrap";
import { useProfileDetail } from "../../contexts/ProfileDetailContext"
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
                            {popularProfiles.result.slice(0, 4).map((profile) => (
                                <Profile key={profile.id} profile={profile} />
                            ))}
                        </div>
                    ) : (
                        popularProfiles.results.map((profile) => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    )}
                </>
            ) : (
                <p> needs a spinner</p>
            )
            }
        </Container>
    );
};

export default PopularProfiles