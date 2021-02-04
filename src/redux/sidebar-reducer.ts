import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import {ActionsType} from './dialogs-reducer';

let initialState = {
    friendsBlock: [
        {id: 1, friendName: 'Kostya', avatar: src1},
        {id: 2, friendName: 'Masha', avatar: src2},
        {id: 3, friendName: 'Misha', avatar: src3}
    ]
};

export const sidebarReducer = (state = initialState, action: ActionsType) => {

    return state
}