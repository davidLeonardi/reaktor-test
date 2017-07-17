import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import PackageList from '../components/PackageList';
import ListItem from '../components/ListItem';
import Link from '../components/Link';
import {PACKAGE} from '../constants/routePaths';

// actions
import * as actions from '../redux/reducers/packageData/actions';

/**
 * Container that wraps (part of) our application, will not render underlying children if we are loading the package data.
 * Calls action creator to load package data. Does not care if successful or not.
 */
export class CheckPackagesContainer extends Component {
    /*
     * componentDidMount, used to call action creator to fetch our package data
     */
  componentDidMount() {
    this.props.actions.getPackageListAction();
  }

    /**
     * Renders the component.
     *
     * @return {string} - HTML markup for the component
     */
  render() {
    if ( this.props.packageList ) {
      return (
          <PackageList>
              { this.props.packageList.map((individualPackage) => {
                return (
                    <ListItem key={individualPackage.id}>
                        <Link
                            activeClassName='active'
                            to={`${PACKAGE}/${individualPackage.id}`}
                        >
                            {individualPackage.id}
                        </Link>
                        <p>{individualPackage.descriptionHighlight}</p>
                    </ListItem>
                );
              })}
          </PackageList>
      );
    }
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}

const mapStateToProps = ( {packageData} ) => ( {packageList: packageData.packageList} );

const mapDispatchToProps = ( dispatch ) => {
  return {actions: bindActionCreators( actions, dispatch )};
};

CheckPackagesContainer.propTypes = {
  actions: PropTypes.object,
  children: PropTypes.node,
  getPackageListAction: PropTypes.func,
  packageList: PropTypes.array,
};

export default connect( mapStateToProps, mapDispatchToProps )( CheckPackagesContainer );
