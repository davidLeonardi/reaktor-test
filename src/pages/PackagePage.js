import React from 'react';

import Link from '../components/Link';
import PackageDetailContainer from '../containers/PackageDetailContainer';
import PropTypes from 'prop-types';

// import {PACKAGE} from '../constants/routePaths';


export const PackagePage = function( props ) {
  return (
      <div>
          <Link
              activeClassName='active'
              to={`/`}
          >
            Return to Installed package Index
          </Link>
          <PackageDetailContainer packageId={props.params.packageId} />
      </div>
  );
};

PackagePage.propTypes = {packageId: PropTypes.string};

export default PackagePage;
