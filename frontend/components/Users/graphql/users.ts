import gql from 'graphql-tag'

export const Users = gql`query Users {
  user {
    id
    firstName
    lastName
  }
}
`
