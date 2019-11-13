import { gql } from 'apollo-boost';

export const GET_SITECONFIG = gql`
  query readSiteConfig {
    readSiteConfig {
      Title
      Tagline
      SiteCopyright
    }
  }
`;

export default GET_SITECONFIG;
