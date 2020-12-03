const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: PhotosType
}

export type ProfileStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

export type ProfileActionsType =
    | ReturnType<typeof onAddPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>


let initialState: ProfileStateType = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 15},
        {id: 2, message: 'How are you?', likesCount: 25},
    ],
    newPostText: 'Bla-Bla',
    profile: null
};

const profileReducer = (state = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost] // вместо stateCopy.posts = [...state.posts]; stateCopy.posts.push(newPost);
            };

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}
export const onAddPost = (postText: string) => {
    return {
        type: ADD_POST,
        newPostText: postText
    } as const
}

export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export default profileReducer;