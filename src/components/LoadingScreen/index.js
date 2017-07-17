import React from 'react';
import styled from 'styled-components';
import {colors} from '../../themes/reaktor';

import Loader from '../Loader';

const StyledLoadingScreen = styled.div`
&{
    width: 100vw;
    height: 100vh;
    background-color: ${colors.black};
    display:flex;
    justify-content: center;
    align-items: center;
 }
`;

const LoadingScreen = ( {...rest} ) => {
  return (
      <StyledLoadingScreen>
          <Loader />
      </StyledLoadingScreen>
  );
};

LoadingScreen.propTypes = {};

LoadingScreen.defaultProps = {};

export default ( LoadingScreen );
