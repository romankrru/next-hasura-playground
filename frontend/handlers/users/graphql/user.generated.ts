import * as Types from '../../../generated/index';

import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type UsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & Pick<Types.User, 'id' | 'firstName' | 'lastName'>
  )> }
);

export type AddUserMutationVariables = Types.Exact<{
  object: Types.User_Insert_Input;
}>;


export type AddUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_user_one?: Types.Maybe<(
    { __typename?: 'user' }
    & Pick<Types.User, 'id' | 'firstName' | 'lastName'>
  )> }
);


export const UsersDocument = gql`
    query Users {
  user {
    id
    firstName
    lastName
  }
}
    `;
export const AddUserDocument = gql`
    mutation AddUser($object: user_insert_input!) {
  insert_user_one(object: $object) {
    id
    firstName
    lastName
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Users(variables?: UsersQueryVariables): Promise<UsersQuery> {
      return withWrapper(() => client.request<UsersQuery>(print(UsersDocument), variables));
    },
    AddUser(variables: AddUserMutationVariables): Promise<AddUserMutation> {
      return withWrapper(() => client.request<AddUserMutation>(print(AddUserDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;