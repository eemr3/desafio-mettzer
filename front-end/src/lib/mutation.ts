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

export const CREATE_FAVORITE = gql`
  mutation CreateFavorite($data: InputFavorite!) {
    createFavorite(data: $data) {
      id
      title
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation RemoveFavorite($id: String!) {
    removeFavorite(id: $id) {
      id
      title
    }
  }
`;
