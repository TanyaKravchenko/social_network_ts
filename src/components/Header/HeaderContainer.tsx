import React from 'react';
import Header, {DispatchToPropsType, MapPropsToType} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootState} from '../redux/redux-store';
import {setAuthUserData} from '../redux/auth-reducer';

class HeaderContainer extends React.Component<MapPropsToType & DispatchToPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login, isAuth} = response.data.data
                    this.props.setAuthUserData(id, email, login, isAuth);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
