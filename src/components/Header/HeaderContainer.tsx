import React from 'react';
import Header, {DispatchToPropsType, MapPropsToType} from './Header';
import {connect} from 'react-redux';
import {RootState} from '../redux/redux-store';
import {getAuthUserData} from '../redux/auth-reducer';

class HeaderContainer extends React.Component<MapPropsToType & DispatchToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
        // AuthAPI.me()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login, isAuth} = response.data.data
        //             this.props.setAuthUserData(id, email, login, isAuth);
        //         }
        //     });
    }

    render() {

        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
