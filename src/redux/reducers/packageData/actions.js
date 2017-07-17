// actions
import {createAction, createPackageAction} from '../../../helpers/actions';
import {load, getPackageList, getPackageDetail, getDependencies, getParents} from '../../../libs/dataLoader';

// types
import {
  DATA_LOAD_REQUEST,
  DATA_LOAD_SUCCESS,
  DATA_LOAD_FAILURE,

  PACKAGE_LIST_REQUEST,
  PACKAGE_LIST_SUCCESS,
  PACKAGE_LIST_FAILURE,

  PACKAGE_DETAIL_REQUEST,
  PACKAGE_DETAIL_SUCCESS,
  PACKAGE_DETAIL_FAILURE,

  PACKAGE_DEPENDENCIES_REQUEST,
  PACKAGE_DEPENDENCIES_SUCCESS,
  PACKAGE_DEPENDENCIES_FAILURE,

  PACKAGE_PARENTS_REQUEST,
  PACKAGE_PARENTS_SUCCESS,
  PACKAGE_PARENTS_FAILURE,
} from './types';

// Create actions
export const fetchPackageDataRequestAction = createAction(DATA_LOAD_REQUEST);
export const fetchPackageDataSuccessAction = createAction(DATA_LOAD_SUCCESS);
export const fetchPackageDataFailureAction = createAction(DATA_LOAD_FAILURE);

export const getPackageListRequestAction = createPackageAction(PACKAGE_LIST_REQUEST);
export const getPackageListSuccessAction = createPackageAction(PACKAGE_LIST_SUCCESS);
export const getPackageListFailureAction = createPackageAction(PACKAGE_LIST_FAILURE);

export const getPackageDetailRequestAction = createPackageAction(PACKAGE_DETAIL_REQUEST);
export const getPackageDetailSuccessAction = createPackageAction(PACKAGE_DETAIL_SUCCESS);
export const getPackageDetailFailureAction = createPackageAction(PACKAGE_DETAIL_FAILURE);

export const getPackageDependencieslRequestAction = createPackageAction(PACKAGE_DEPENDENCIES_REQUEST);
export const getPackageDependenciesSuccessAction = createPackageAction(PACKAGE_DEPENDENCIES_SUCCESS);
export const getPackageDependenciesFailureAction = createPackageAction(PACKAGE_DEPENDENCIES_FAILURE);

export const getPackageParentsRequestAction = createPackageAction(PACKAGE_PARENTS_REQUEST);
export const getPackageParentsSuccessAction = createPackageAction(PACKAGE_PARENTS_SUCCESS);
export const getPackageParentsFailureAction = createPackageAction(PACKAGE_PARENTS_FAILURE);


const dataLoadRequest = () => {
  return {
    type: DATA_LOAD_REQUEST,
    payload: null,
  };
};

const dataLoadSuccess = (data) => {
  return {
    type: DATA_LOAD_SUCCESS,
    payload: data,
  };
};

const dataLoadFailure = (error) => {
  return {
    type: DATA_LOAD_FAILURE,
    payload: null,
    error: error,
  };
};

const packageLoadRequest = () => {
  return {
    type: PACKAGE_LIST_REQUEST,
    payload: null,
  };
};

const packageLoadSuccess = (data) => {
  return {
    type: PACKAGE_LIST_SUCCESS,
    payload: data,
  };
};

const packageLoadFailure = (error) => {
  return {
    type: PACKAGE_LIST_FAILURE,
    error: error,
    payload: null,
  };
};

const getPackageDetailRequest = () => {
  return {
    type: PACKAGE_DETAIL_REQUEST,
    payload: null,
  };
};

const getPackageDetailSuccess = (data) => {
  return {
    type: PACKAGE_DETAIL_SUCCESS,
    payload: data,
  };
};

const getPackageDetailFailure = (error) => {
  return {
    type: PACKAGE_DETAIL_FAILURE,
    error: error,
    payload: null,
  };
};

const packageDependenciesRequest = () => {
  return {
    type: PACKAGE_DEPENDENCIES_REQUEST,
    payload: null,
  };
};

const packageDependenciesSuccess = (data) => {
  return {
    type: PACKAGE_DEPENDENCIES_SUCCESS,
    payload: data,
  };
};

const packageDependenciesFailure = (error) => {
  return {
    type: PACKAGE_DEPENDENCIES_FAILURE,
    error: error,
    payload: null,
  };
};

const packageParentsRequest = () => {
  return {
    type: PACKAGE_PARENTS_REQUEST,
    payload: null,
  };
};

const packageParentsSuccess = (data) => {
  return {
    type: PACKAGE_PARENTS_SUCCESS,
    payload: data,
  };
};

const packageParentsFailure = (error) => {
  return {
    type: PACKAGE_PARENTS_FAILURE,
    error: error,
    payload: null,
  };
};


// This action triggers the loading of the data file and the creation of the graph data structure
export const loadPackageFileAction = () => {
  return (dispatch) => {
    dispatch(dataLoadRequest());
    return load('/data/status.real.txt')
      .then((results) => {
        dispatch(dataLoadSuccess(results));
      })
      .catch((error) => {
        console.error('get package data error', toString(error));
        dispatch(dataLoadFailure(error));
        return Promise.reject(error);
      });
  };
};

export const getPackageListAction = () => {
  return (dispatch) => {
    dispatch(packageLoadRequest());
    try {
      dispatch(packageLoadSuccess(getPackageList()));
    } catch (error) {
      dispatch(packageLoadFailure(error));
    }
  };
};

export const loadPackageDetailsAction = (packageId) => {
  return (dispatch) => {
    dispatch(getPackageDetailRequest(packageId));
    try {
      dispatch(getPackageDetailSuccess(getPackageDetail(packageId)));
    } catch (error) {
      dispatch(getPackageDetailFailure(error));
    }
  };
};

export const loadPackageDependenciesAction = (packageId) => {
  return (dispatch) => {
    dispatch(packageDependenciesRequest(packageId));
    try {
      dispatch(packageDependenciesSuccess(getDependencies(packageId)));
    } catch (error) {
      dispatch(packageDependenciesFailure(error));
    }
  };
};

export const loadPackageParentsAction = (packageId) => {
  return (dispatch) => {
    dispatch(packageParentsRequest(packageId));
    try {
      dispatch(packageParentsSuccess(getParents(packageId)));
    } catch (error) {
      dispatch(packageParentsFailure(error));
    }
  };
};
