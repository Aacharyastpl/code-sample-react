import gql from 'graphql-tag'

const GET_BAGNUM = gql`
  query getBagNum($token: String!) {
    me(token: $token) {
      id
      bag {
        items {
          id
        }
      }
    }
  }
`
export default GET_BAGNUM
