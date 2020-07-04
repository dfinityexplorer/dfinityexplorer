/**
 * @file AccountsPage
 * @copyright Copyright (c) 2018-2020 Dylan Miller, Todd Kitchens, and openblockexplorer contributors
 * @license MIT License
 */

import React from "react";
import styled from 'styled-components';
import {
  Typography
} from '@material-ui/core';
import TrackablePage from '../TrackablePage/TrackablePage'
import { Breakpoints } from '../../utils/breakpoint';
import Constants from '../../constants';

const TypographyHeading = styled(Typography)`
  && {
    font-family: ${Constants.FONT_PRIMARY};
    font-size: ${Constants.MATERIAL_FONT_SIZE_H4};
    font-weight: 400;
    color: ${props => props.theme.colorBodyText};
    ${({ breakpoint }) =>
      breakpoint === Breakpoints.XS && `
        font-size: ${Constants.MATERIAL_FONT_SIZE_H5};       
      `
    }
  }
`;

const TypographyBody = styled(Typography)`
  && {
    font-family: ${Constants.FONT_PRIMARY};
    font-size: ${Constants.MATERIAL_FONT_SIZE_BODY_1};
    line-height: 1.75rem;
    color: ${props => props.theme.colorBodyTextDim};
  }
`;

class AccountsPage extends TrackablePage {
  render() {
    const { breakpoint } = this.props;
    return (
      <div style={{ marginTop: '32px', marginLeft: '32px' }}>
        <TypographyHeading breakpoint={breakpoint}>Accounts</TypographyHeading>
        <TypographyBody>Accounts page coming soon.</TypographyBody>
      </div>
    );
  }
}

export default AccountsPage;
