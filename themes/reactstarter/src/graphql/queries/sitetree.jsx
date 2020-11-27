import { gql } from '@apollo/client';

export const GET_SITETREE = gql`

  fragment sitetreeParts on Page {
    ID
    ParentID
    Title
    Content
    URLSegment
    ShowInMenus
    Sort
  }

  query readSiteTrees {
    readSiteTrees(ShowInMenus: true ParentID: "0") {
      edges {
        node {
          ...sitetreeParts
          Children {
            edges {
              node {
                ...sitetreeParts
              }
            }
          }
        }
      }
    }
  }

`;

export default GET_SITETREE;
