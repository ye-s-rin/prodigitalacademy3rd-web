import React, { useEffect, useState } from 'react';
import { fetchCampaignList } from '../apis/campaign';

const CampaignCard = ({ campaign }) => {
    console.log(campaign);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={campaign.photoUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title" style={{ color: "#00C2BF" }}>{campaign.achievementRate}</h3>
                <h5 className="card-title">{campaign.title}</h5>
                <p className="card-text" style={{ fontSize: "0.8rem", color: "gray" }}>{campaign.nickname}</p>
                <p className="card-text">{campaign.coreMessage}</p>
            </div>
        </div>
    );
};

const CampaignList = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        fetchCampaignList()
            .then(res => setCampaigns(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-3">
            {campaigns.map(campaign => (
                <CampaignCard key={campaign._id} campaign={campaign} />
            ))}
        </div>
    );
};

export default CampaignList;
