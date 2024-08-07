import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useProfileDetail, useSetProfileDetail } from "../../contexts/ProfileDetailContext";
import Snap from "../snaps/Snap";
import ProfileEditDropDown from "../../components/ProfileEditDropDown";
import { fetchAdditionalDetails } from "../../utils/utils";
import styles from "../../styles/ProfilePage.module.css";
import { axiosReq } from "../../snapit_api/axiosDefaults";
/*

The ProfilePage component fetches and displays a user's profile 
details and associated snaps. If the current user owns the profile, 
an edit dropdown is shown, and their profile image, bio, and snaps 
are displayed using infinite scrolling. The component also handles 
the potential for adding or removing friends, though these actions 
are currently commented out. 
*/

function ProfilePage() {
  const [isReady, setIsReady] = useState(false);
  const [profileSnaps, setProfileSnaps] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { pageProfile } = useProfileDetail();
  const { setProfileDetail } = useSetProfileDetail();

  const is_owner = currentUser?.username === pageProfile?.owner;

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const [{ data: pageProfile }, { data: profileSnaps }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/snaps/?owner__profile=${id}`),
        ]);
        setProfileDetail((prevState) => ({
          ...prevState,
          pageProfile,
        }));
        setProfileSnaps(profileSnaps);
        setIsReady(true);
      } catch (err) {
        console.error("Error fetching profile details:", err);
      }
    };
    fetchProfileDetails();
  }, [id, setProfileDetail]);

  if (!isReady) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className={styles.profileContainer}>
      {is_owner && <ProfileEditDropDown id={pageProfile?.id} />}
      <Image src={pageProfile?.image} alt={`${pageProfile?.owner}&apos;s profile`} className={styles.profileImage} />
      <div className={styles.profileInfo}>
        <h3>{pageProfile?.owner}</h3>
        <div>Snaps: {pageProfile?.snaps_count}</div>
        {/* <div>Followers: {pageProfile?.friended_count}</div>
        <div>Following: {pageProfile?.friendship_count}</div> */}
      </div>
      <div className={styles.profileActions}>
        {/* {currentUser && !is_owner && (
          pageProfile?.friendship_id ? (
            <Button onClick={() => handleUnfriend(pageProfile)}>handleUnfriend</Button>
          ) : (
            <Button onClick={() => handleFriend(pageProfile)}>Friend</Button>
          )
        )} */}
        {pageProfile?.content && <div>{pageProfile.content}</div>}
      </div>
      <div className={styles.snapsContainer}>
        <p className={styles.snapsTitle}>{pageProfile?.owner}&apos;s snaps</p>
        {profileSnaps.results.length ? (
          <InfiniteScroll
            dataLength={profileSnaps.results.length}
            next={() => fetchAdditionalDetails(profileSnaps, setProfileSnaps)}
            hasMore={!!profileSnaps.next}
            loader={<p>Loading more snaps...</p>}
          >
            <div className={styles.snapsList}>
              {profileSnaps.results.map((snap) => (
                <Snap key={snap.id} {...snap} setSnaps={setProfileSnaps} />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <p>No snaps found</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
