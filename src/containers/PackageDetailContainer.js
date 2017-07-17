import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import ListItem from '../components/ListItem';
import Link from '../components/Link';

import {PACKAGE} from '../constants/routePaths';

// actions
import * as actions from '../redux/reducers/packageData/actions';

// components
import PackageDetails from '../components/PackageDetails';
import DependencyList from '../components/DependencyList';

/**
 * Container that wraps (part of) our application, will not render underlying children if we are loading the package data.
 * Calls action creator to load package data. Does not care if successful or not.
 */
export class PackageDetailContainer extends Component {
    /*
     * componentDidMount, used to call action creator to fetch our package data
     */
  componentDidMount() {
    this.props.actions.loadPackageDetailsAction(this.props.packageId);
    this.props.actions.loadPackageDependenciesAction(this.props.packageId);
    this.props.actions.loadPackageParentsAction(this.props.packageId);
  }


  /*
   * componentWillUpdate, used to call action creator to fetch our package data once we navigate from another package
   */
  componentWillUpdate( nextProps ) {
    if ( this.props.packageId !== nextProps.packageId ) {
      this.props.actions.loadPackageDetailsAction(nextProps.packageId);
      this.props.actions.loadPackageDependenciesAction(nextProps.packageId);
      this.props.actions.loadPackageParentsAction(nextProps.packageId);
    }
  }

    /**
     * Renders the component.
     *
     * @return {string} - HTML markup for the component
     */
  render() {
    const {packageDetails, packageDependencies, packageParents} = this.props;
    if ( packageDetails ) {
      return (
          <div>
              <PackageDetails package={packageDetails} />

              <DependencyList>
                  <p>Package dependencies</p>
                  { packageDependencies && packageDependencies.map((packageDependency) => {
                    return (
                        <ListItem key={packageDependency}>
                            <Link
                                activeClassName='active'
                                to={`${PACKAGE}/${packageDependency}`}
                            >
                                {packageDependency}
                            </Link>
                        </ListItem>
                    );
                  })}
              </DependencyList>

              <DependencyList>
                  <p>Packages that depend on this item</p>
                  { packageParents && packageParents.map((individualParent) => {
                    return (
                        <ListItem key={individualParent}>
                            <Link
                                activeClassName='active'
                                to={`${PACKAGE}/${individualParent}`}
                            >
                                {individualParent}
                            </Link>
                        </ListItem>
                    );
                  })}
              </DependencyList>
          </div>
      );
    }

    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}

const mapStateToProps = ( {packageData} ) => ( {
  packageDetails: packageData.packageDetails,
  packageDependencies: packageData.packageDependencies,
  packageParents: packageData.packageParents,
} );

const mapDispatchToProps = ( dispatch ) => {
  return {actions: bindActionCreators( actions, dispatch )};
};

PackageDetailContainer.propTypes = {
  actions: PropTypes.object,
  children: PropTypes.node,
  loadPackageDependenciesAction: PropTypes.func,
  loadPackageDetailsAction: PropTypes.func,
  loadPackageParentsAction: PropTypes.func,
  packageDependencies: PropTypes.array,
  packageDetails: PropTypes.object,
  packageId: PropTypes.string,
  packageParents: PropTypes.array,
};

export default connect( mapStateToProps, mapDispatchToProps )( PackageDetailContainer );
