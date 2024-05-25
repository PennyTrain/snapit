import React, { useEffect, useState } from "react";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../snapit_api/axiosDefaults";
import {
  useProfileDetail,
  useSetProfileDetail
} from "../../contexts/ProfileDetailContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchAdditionalDetails } from "../../utils/utils";
import Snap from "../snaps/Snap";
import ProfileEditDropDown from "../../components/ProfileEditDropDown";

function ProfilePage() {
    const [isReady, setIsReady] = useState(false);
    const [profileSnaps, setProfileSnaps] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const profile = useProfileDetail();
    const { setProfileDetail, handleFriend, handleUnfriend } = useSetProfileDetail();

    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchProfileDetails = async () => {
            try {
                const [{ data: pageProfile }, { data: profileSnaps }] = 
                await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/snaps/?owner__profile=${id}`),
                ]);
                setProfileDetail(pageProfile);
                setProfileSnaps(profileSnaps);
                setIsReady(true);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProfileDetails();
    }, [id, setProfileDetail]);

    const profilePage = (
        <>
            {is_owner && <ProfileEditDropDown id={profile?.id} />}
            <Image src={profile?.image} />
            <h3>{profile?.owner}</h3>
            <div>{profile?.snaps_count}</div>
            <div>{profile?.friended_count}</div>
            <div>{profile?.friendship_count}</div>
            {currentUser &&
            !is_owner &&
            (profile?.friendship_id ? (
                <Button onClick={() => handleUnfriend(profile)}>
                    Unfollow
                </Button>
            ) : (
                <Button onClick={() => handleFriend(profile)}>
                    Follow
                </Button>
            ))}
            {profile?.content && <div>{profile.content}</div>}
        </>
    );

    const profilePageSnaps = (
        <>
            <p>{profile?.owner}'s snaps</p>
            {profileSnaps.results.length ? (
                <InfiniteScroll
                    dataLength={profileSnaps.results.length}
                    next={() => fetchAdditionalDetails(profileSnaps, setProfileSnaps)}
                    hasMore={!!profileSnaps.next}
                    loader={<p>Loading...</p>}
                >
                    {profileSnaps.results.map((snap) => (
                        <Snap key={snap.id} {...snap} setSnaps={setProfileSnaps} />
                    ))}
                </InfiniteScroll>
            ) : (
                <p>No results found</p>
            )}
        </>
    );

    return (
        <>
            <PopularProfiles mobile />
            {isReady ? (
                <>
                    {profilePage}
                    {profilePageSnaps}
                </>
            ) : (
                <p>Loading...</p>
            )}
            <PopularProfiles />
        </>
    );
}

export default ProfilePage;
