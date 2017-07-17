import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {fonts, colors} from '../../themes/reaktor';

const StyledPackageName = styled.li`
&{
    font-size: ${fonts.size.l};
    line-height: ${fonts.lineHeight.l};
    list-style: none;
    position: relative;
    padding: 0 0 0 28px;
    margin: 10px 0;
    color: ${colors.black};
    letter-spacing: 0;
    margin: 8px 0;
    overflow: hidden;
}
`;

const StyledPackageDescriptionHighlight = styled.li`
&{
    font-size: ${fonts.size.m};
    line-height: ${fonts.lineHeight.m};
    list-style: none;
    position: relative;
    padding: 0 0 0 28px;
    margin: 10px 0;
    color: ${colors.black};
    letter-spacing: 0;
    margin: 4px 0;
    overflow: hidden;
}
`;

const StyledPackageDescription = styled.li`
&{
    font-size: ${fonts.size.m};
    line-height: ${fonts.lineHeight.m};
    list-style: none;
    position: relative;
    padding: 0 0 0 28px;
    margin: 10px 0;
    color: ${colors.black};
    letter-spacing: 0;
    margin: 4px 0;
    overflow: hidden;
}
`;

const PackageDetails = ( oArgs ) => {
  const {id, descriptionHighlight, description} = oArgs.package;
  return (
      <div>
          <StyledPackageName>
              {id}
          </StyledPackageName>

          <StyledPackageDescriptionHighlight>
              {descriptionHighlight}
          </StyledPackageDescriptionHighlight>
          <StyledPackageDescription>
              {description}
          </StyledPackageDescription>
      </div>
  );
};

PackageDetails.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  descriptionHighlight: PropTypes.string,
  id: PropTypes.string,
};

PackageDetails.defaultProps = {};

PackageDetails.displayName = 'PackageDetails';

export default PackageDetails;
