import gql from 'graphql-tag'

export const Users = gql`query Users {
  user {
    id
    firstName
    lastName
  }
}`

export const AddUser = gql`mutation AddUser($object: user_insert_input!) {
  insert_user_one(object: $object) {
    id
    firstName
    lastName
  }
}`
