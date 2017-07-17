import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const ListCSS = css`
    display: inline;
    text-align: left;
    margin: 4px;
    padding: 0;
    counter-reset: section;
    list-style: none;
`;

const StyledDependencyList = styled.ul`${ ListCSS }`;

/**
 * Package List component
 * @param {obj} props
 * @return {string} - HTML markup for the component
 */
function DependencyList( {children, ...rest} ) {
  return (
      <div>
          <StyledDependencyList {...rest}>
              {children}
          </StyledDependencyList>
      </div>
  );
}

DependencyList.propTypes = {children: PropTypes.node};

export default DependencyList;
