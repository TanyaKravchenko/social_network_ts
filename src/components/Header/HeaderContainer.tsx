import React from 'react';
import Header, {DispatchToPropsType, MapPropsToType} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component<MapPropsToType & DispatchToPropsType> {
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapPropsToType, DispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {logout})(HeaderContainer);
