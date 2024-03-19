import { gql, request } from "graphql-request";
import { getToken } from "next-auth/jwt";

const baseUrl = "https://api.github.com/graphql";

const getUserInfo = async () => {
  const query = gql`
    query Viewer {
      viewer {
        login
        name
        bio
        websiteUrl
        repositories {
          totalCount
        }
      }
    }
  `;

const requestHeaders = {
    authorization: `Bearer ${getToken}`,
  };

  const result = await request(baseUrl, query, requestHeaders);
  return result;
};

export default {
  getUserInfo,
};
