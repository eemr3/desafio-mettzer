import { gql } from '@apollo/client';

export const SIGNIN = gql`
  mutation Login($data: InputLogin!) {
    login(data: $data) {
      access_token
    }
  }
`;

export const CREATE_USE = gql`
  mutation CreateUser($data: InputUser!) {
    createUser(data: $data) {
      id
      fullName
      email
    }
  }
`;
