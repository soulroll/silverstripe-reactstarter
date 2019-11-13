import { gql } from 'apollo-boost';

export const GET_SITETREE = gql`
  query readSiteTrees {
    readSiteTrees(ShowInMenus: true) {
      edges {
        node {
          ID
          ParentID
          Title
          Content
          URLSegment
          ShowInMenus
          Sort
        }
      }
    }
  }
`;

export default GET_SITETREE;
