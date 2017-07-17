import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const ListCSS = css`
    display: block;
    text-align: left;
    margin: 0;
    padding: 0;
    counter-reset: section;
    list-style: none;
`;

const StyledUl = styled.ul`${ ListCSS }`;

/**
 * Package List component
 * @param {obj} props
 * @return {string} - HTML markup for the component
 */
function List( {children, ...rest} ) {
  return (
      <div>
          <StyledUl {...rest}>
              {children}
          </StyledUl>
      </div>
  );
}

List.propTypes = {children: PropTypes.node};

export default List;
