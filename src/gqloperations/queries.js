import {gql} from '@apollo/client'
// export const GET_ALL_QUOTES = gql`
// query getAll{
//     readAllProducts{
//       title
//     }
//   }
// `
export const GET_CAMPAIGN_LIST = gql`
  query getAllCampaignList{
    campaignReadCampaignUsersAndMessages{
        campaignName
        _id
    }
  }
`
export const GET_CAMPAIGN_DETAILS = gql`
  query getAllCampaignList{
    campaignReadCampaignUsersAndMessages{
        campaignName
        _id
        messageInfo{
            _id
            name
          }
    }
  }
`