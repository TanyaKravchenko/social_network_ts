import {connect} from 'react-redux';
import FriendsBlock from './FriendsBlock';
import {AppStateType} from '../../../redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
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