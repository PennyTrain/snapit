import { axiosReq } from "../snapit_api/axiosDefaults";

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
