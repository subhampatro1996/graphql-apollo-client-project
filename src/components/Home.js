import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { GET_ALL_QUOTES, GET_CAMPAIGN_LIST } from "../gqloperations/queries";
import Details from "./Details";
import { Link, Route,Routes, useNavigate } from "react-router-dom";

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
                
              {localStorage.getItem('token') ?  <Link>{campaignList.campaignName}</Link>  : navigate('/login')}
            </li>
          );
        })}
      </ul>
        <h3 style={{color:"orange"}}>Details of campaign</h3>
        {bool && <Details campignId={campignId}/>}


    </div>
  );
};

export default Home;
