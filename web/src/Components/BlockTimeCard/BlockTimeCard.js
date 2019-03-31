/**
 * @file BlockTimeCard
 * @copyright Copyright (c) 2018-2019 Dylan Miller and dfinityexplorer contributors
 * @license MIT License
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import DashCard from '../DashCard/DashCard';
import queryNetworkStatistics from '../../graphql/queryNetworkStatistics';
import subscriptionNetworkStatistics from '../../graphql/subscriptionNetworkStatistics';
import Constants from '../../constants';

/**
 * This component displays a dashboard card with seconds per block retrieved via GraphQL.
 */
class BlockTimeCard extends Component {
  static propTypes = {
    /**
     * The index of the card. Used for theming.
     */
    cardIndex: PropTypes.number.isRequired,
    /**
     * The className passed in by styled-components when styled(MyComponent) notation is used on
     * this component.
     */
    className: PropTypes.string
  };

  /**
   * Return a reference to a React element to render into the DOM.
   * @return {Object} A reference to a React element to render into the DOM.
   * @public
   */
  render() {
    let { cardIndex, className } = this.props;
    
    return (
      <Query query={queryNetworkStatistics}>
      {({ loading, error, data, subscribeToMore }) => {
        const subscribeToNewObjects = () => this.subscribeToNewObjects(subscribeToMore);
        let secondsPerBlock;
        if (loading)
          secondsPerBlock = 'Loading...';
        else if (error)
          secondsPerBlock = 'Network error';
        else
          secondsPerBlock = data.networkStatistics.secondsPerBlock.toFixed(1) + ' s';
        return (
          <DashCard
            className={className}
            cardIndex={cardIndex}
            title='Avg Block Time'
            value={secondsPerBlock}
            svgIconPath={Constants.ICON_SVG_PATH_BLOCK_TIME}
            subscribeToNewObjects={subscribeToNewObjects}
          />
        );
      }}
    </Query>
    );
  }

  /**
   * Subscribe to receive new NetworkStatistics objects using subscribeToMore, and update the
   * query's store by replacing the previous NetworkStatistics Object with the new NetworkStatistics
   * object.
   * @param {Function} subscribeToMore Function which gets called every time the subscription
   *  returns.
   * @private
   */
  subscribeToNewObjects(subscribeToMore) {
    subscribeToMore({
      document: subscriptionNetworkStatistics,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data)
          return prev;
        return {networkStatistics: subscriptionData.data.networkStatistics.node};
      }
    });
  }
}

export default BlockTimeCard;
