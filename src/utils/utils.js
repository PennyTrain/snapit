import { axiosReq } from "../snapit_api/axiosDefaults";

// The fetchAdditionalDetails function asynchronously fetches 
// additional assets using an axios instance (axiosReq) and updates 
// the state of assets (setAssets) by appending new results from the 
// fetched data, ensuring no duplicates based on ID. Error handling 
// logs any encountered errors to the console for debugging purposes.

export const fetchAdditionalDetails = async (assets, setAssets) => {
  try {
    const { data } = await axiosReq.get(assets.next);
    setAssets((prevAssets) => ({
      ...prevAssets,
      next: data.next,
      results: [
        ...prevAssets.results,
        ...data.results.filter((cur) => !prevAssets.results.some((accAssets) => accAssets.id === cur.id)),
      ],
    }));
  } catch (err) {
    console.log(err);
  }
};

export const friendHelper = (profile, clickedProfile, friendship_id) => {
  if (profile.id === clickedProfile.id) {
    return {
      ...profile,
      friended_count: profile.friended_count + 1,
      friendship_id,
    };
  } else if (profile.is_owner) {
    return {
      ...profile,
      friendship_count: profile.friendship_count + 1,
    };
  } else {
    return profile;
  }
};

export const unfriendHelper = (profile, clickedProfile) => {
  if (profile.id === clickedProfile.id) {
    return {
      ...profile,
      friended_count: profile.friended_count - 1,
      friendship_id: null,
    };
  } else if (profile.is_owner) {
    return {
      ...profile,
      friendship_count: profile.friendship_count - 1,
    };
  } else {
    return profile;
  }
};