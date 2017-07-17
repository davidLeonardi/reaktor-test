import React from 'react';

import PackageListContainer from '../containers/PackageListContainer';

export const ListPage = function( props ) {
  return (
      <div>
        The following packages are installed:
        <PackageListContainer />
      </div>
  );
};

export default ListPage;
