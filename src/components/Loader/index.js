import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
&{
    position: relative;
 }
`;

const Loader = ( {...rest} ) => {
  return (
      <StyledLoader {...rest} >
          <div>
              Loading data...
          </div>
      </StyledLoader>
  );
};

Loader.propTypes = {};

Loader.defaultProps = {};

export default ( Loader );
