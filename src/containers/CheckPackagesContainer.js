import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

// actions
import * as actions from '../redux/reducers/packageData/actions';

// components
import LoadingScreen from '../components/LoadingScreen';

/**
 * Container that wraps (part of) our application, will not render underlying children if we are loading the package data.
 * Calls action creator to load package data. Does not care if successful or not.
 */
export class CheckPackagesContainer extends Component {
    /*
     * componentDidMount, used to call action creator to fetch our package data
     */
  componentDidMount() {
    this.props.actions.loadPackageFileAction();
  }

    /**
     * Renders the component.
     *
     * @return {string} - HTML markup for the component
     */
  render() {
    const {loaded} = this.props;
      // Don't render children if we are loading the data
    if ( !loaded ) {
      return <LoadingScreen />;
    } else {
      return (
          <div>
              {this.props.children}
          </div>
      );
    }
  }
}

const mapStateToProps = ( {packageData} ) => ( {loaded: packageData.loaded} );

const mapDispatchToProps = ( dispatch ) => {
  return {actions: bindActionCreators( actions, dispatch )};
};

CheckPackagesContainer.propTypes = {
  actions: PropTypes.object,
  children: PropTypes.node,
  loaded: PropTypes.bool,
  loadPackageFileAction: PropTypes.func,
};

export default connect( mapStateToProps, mapDispatchToProps )( CheckPackagesContainer );
