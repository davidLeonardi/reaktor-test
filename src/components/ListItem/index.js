import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {fonts, colors} from '../../themes/reaktor';

const StyledListItem = styled.li`
&{
    font-size: ${fonts.size.m};
    line-height: ${fonts.lineHeight.m};
    list-style: none;
    position: relative;
    padding: 0 0 0 28px;
    margin: 10px 0;
    color: ${colors.black};
    letter-spacing: 0;
    margin: 8px 0;
    overflow: hidden;
    background-color: ${colors.white};
}
`;

/**
 * ListItem
 * @return {JSX}
 */
const ListItem = ( {children, ...rest} ) => {
  return (
      <StyledListItem
          {...rest}
      >
          {children}
      </StyledListItem>
  );
};

ListItem.propTypes = {children: PropTypes.node};

ListItem.defaultProps = {};

ListItem.displayName = 'ListItem';

export default ListItem;
