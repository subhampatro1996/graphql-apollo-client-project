import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_CAMPAIGN_DETAILS } from '../gqloperations/queries';
import { useNavigate } from 'react-router-dom';


const Details = (props) => {
    const {campignId} = props
    const navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_CAMPAIGN_DETAILS);
  if (loading) {
    return <h1>loading</h1>;
  }


    const filteredCampign = data.campaignReadCampaignUsersAndMessages.map((ele)=>{
        return ele._id === campignId && ele
    })

  return (
    <div className="container">
      <ul>
        {
            filteredCampign.map((ele,i)=>{
                if(ele){
                   return (
                    <div key={i}>
                    <li>Name - {ele.campaignName}</li>
                    <li>Message length - {ele.messageInfo.length}</li>
                    </div>
                    )
                }
            })
        }
      </ul>
    </div>
  )
}

export default Details
