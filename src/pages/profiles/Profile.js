import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSetProfileDetail } from "../../contexts/ProfileDetailContext";

const Profile = (props) => {
    const { profile, mobile, imageSize = 55 } = props;
    const { id, friendship_id, image, owner } = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const { handleFriend, handleUnfriend } = useSetProfileDetail();

    return (
        <div>
            <div>
                <Link to={`/profiles/${id}`}>
                <p>avatar?</p>
                </Link>
            </div>  
            <div>
                <p>{owner}</p>
            </div>
            <div>
                {!mobile &&
                currentUser &&
                !is_owner &&
                (friendship_id ? (
                    <Button onClick={() => handleUnfriend(profile)}>
                        unfriend
                    </Button>
                ): (
                    <Button onClick={() => handleFriend(profile)}>
                        follow
                    </Button>
                ))
            }
            </div>
        </div>
    );
};

export default Profile;