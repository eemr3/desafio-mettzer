import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser {
    user {
      id
      fullName
      email
      avatarUrl
    }
  }
`;

export const GET_FAVORITES = gql`
  query GetAllFavorites($limit: Float!) {
    getAllFavorites(limit: $limit) {
      favorites {
        articleId
        title
        description
        authors
        urls
        type
      }
      totalItems
    }
  }
`;
