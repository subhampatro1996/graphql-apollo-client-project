import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { GET_ALL_QUOTES, GET_CAMPAIGN_LIST } from "../gqloperations/queries";
import Details from "./Details";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [bool, setBool] = useState(false);
  const [campignId, setCampignId] = useState("");
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CAMPAIGN_LIST);
  if (loading) {
    return <h1>loading</h1>;
  }
  const showCampaignDetails = (id) => {
    setBool(true);
    setCampignId(id)
  };
  return (
    <div className="container">
      <ul>
        {data.campaignReadCampaignUsersAndMessages.map((campaignList, i) => {
          return (
            <li
              key={campaignList._id}
              onClick={() => {
                showCampaignDetails(campaignList._id);
                
              }}
            >
              {campaignList.campaignName}
            </li>
          );
        })}
      </ul>

      {<Details campignId={campignId}/>}


    </div>
  );
};

export default Home;
