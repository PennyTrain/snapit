import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axiosReq, axiosRes } from "../snapit_api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { friendHelper, unfriendHelper } from "../utils/utils";
import React from "react";
/*
The code establishes a context for managing detailed profile data 
and interactions within a React application, providing hooks for 
accessing and updating this data. It includes functions for handling 
friendships (friend and unfriend actions) that update the state 
accordingly and a useEffect hook that fetches popular profiles from
 an API when the current user changes. The context provider wraps 
 its children with the current profile data and functions for updating it.
 */

const ProfileDetailContext = createContext();
const SetProfileDetailContext = createContext();

const useProfileDetail = () => useContext(ProfileDetailContext);
const useSetProfileDetail = () => useContext(SetProfileDetailContext);

const ProfileDetailProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        pageProfile: {},
        popularProfiles: { results: [] },
    });

    const currentUser = useCurrentUser();

    const handleFriend = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post("/friendships/", {
                friended: clickedProfile.id,
            });

            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: friendHelper(prevState.pageProfile, clickedProfile, data.id),
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        friendHelper(profile, clickedProfile, data.id)
                    ),
                },
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnfriend = async (clickedProfile) => {
        try {
            await axiosRes.delete(`/friendships/${clickedProfile.friendship_id}/`);

            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: unfriendHelper(prevState.pageProfile, clickedProfile),
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        unfriendHelper(profile, clickedProfile)
                    ),
                },
            }));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosReq.get("/profiles/?ordering=-friended_count");
                setProfileData((prevState) => ({
                    ...prevState,
                    popularProfiles: data,
                }));
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [currentUser]);

    return (
        <ProfileDetailContext.Provider value={profileData}>
            <SetProfileDetailContext.Provider value={{ setProfileDetail: setProfileData, handleFriend, handleUnfriend }}>
                {children}
            </SetProfileDetailContext.Provider>
        </ProfileDetailContext.Provider>
    );
};

ProfileDetailProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { useProfileDetail, useSetProfileDetail, ProfileDetailProvider };
