import React from 'react';
import {Redirect} from 'react-router-dom';
import {RootState} from '../components/redux/redux-store';
import {connect} from 'react-redux';

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props} />
        }
    }
    let mapStateToPropsForRedirect = (state: RootState): mapStateToPropsForRedirectType => ({
        isAuth: state.auth.isAuth
    })

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}