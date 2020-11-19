import React from 'react';
import {StateType} from '../../redux/store';
import {connect} from 'react-redux';
import FriendsBlock from './FriendsBlock';

let mapStateToProps = (state: StateType) => {
    return {
        friendsName: state.sidebar.friendsBlock
    }
}

// let mapDispatchToProps = (dispatch: ((action: ActionsType) => void)) => {
//     return {
//
//            }
// }

const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlock);


export default FriendsBlockContainer;