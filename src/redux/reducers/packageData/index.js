// Import types
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

export const initialState = {
  loaded: false,
  error: null,
  dag: null,
  packageId: null,
};

export default ( state = initialState, action = {} ) => {
  switch ( action.type ) {
  case DATA_LOAD_REQUEST:
  case PACKAGE_LIST_REQUEST:
  case PACKAGE_DETAIL_REQUEST:
  case PACKAGE_DEPENDENCIES_REQUEST:
  case PACKAGE_PARENTS_REQUEST:
    return {
      ...state,
      loaded: false,
      error: null,
    };

  case DATA_LOAD_FAILURE:
  case PACKAGE_LIST_FAILURE:
  case PACKAGE_DETAIL_FAILURE:
  case PACKAGE_DEPENDENCIES_FAILURE:
  case PACKAGE_PARENTS_FAILURE:
    return {
      ...state,
      loaded: false,
      error: action.payload,
    };

  case DATA_LOAD_SUCCESS:
    return {
      ...state,
      loaded: action.payload,
      error: null,
    };
  case PACKAGE_LIST_SUCCESS:
    return {
      ...state,
      packageDetails: null,
      packageList: action.payload,
      loaded: true,
      error: null,
    };
  case PACKAGE_DETAIL_SUCCESS:
    return {
      ...state,
      packageDetails: action.payload,
      packageList: null,
      loaded: true,
      error: null,
    };
  case PACKAGE_DEPENDENCIES_SUCCESS:
    return {
      ...state,
      packageDependencies: action.payload,
      packageList: null,
      loaded: true,
      error: null,
    };
  case PACKAGE_PARENTS_SUCCESS:
    return {
      ...state,
      packageParents: action.payload,
      packageList: null,
      loaded: true,
      error: null,
    };
  default:
    return state;
  }
};
