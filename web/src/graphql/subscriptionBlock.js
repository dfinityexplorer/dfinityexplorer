/**
 * @file subscriptionBlock
 * @copyright Copyright (c) 2018-2020 Dylan Miller and openblockexplorer contributors
 * @license MIT License
 */

import gql from 'graphql-tag';

/**
 * GraphQL subscription to receive a new block.
 * @return {Object} The new Block object.
 */
const subscriptionBlock = gql`
  subscription {
    block {
      node {
        id
        height
        timestamp
        numTransactions
      }
    }
  }
`;

export default subscriptionBlock;
