export const createAction = ( type ) => {
  return ( payload ) => ( {
    type,
    payload,
  } );
};

export const createPackageAction = ( type ) => {
  return ( packageId, payload ) => ( {
    type,
    packageId,
    payload,
  } );
};
