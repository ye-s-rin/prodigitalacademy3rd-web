import instance from "./base";

export async function fetchCampaignList() {
    const response = await instance.get("/campaign");

    return response.data;
};