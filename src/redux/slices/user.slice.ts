import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@types';

interface IUser {
  userInfo: User;
  isLogin: boolean;
}

const initialState: IUser = {
  isLogin: false,
  userInfo: {
    uid: '',
    createdAt: '',
    email: '',
    friendList: [],
    fullName: '',
    gender: '',
    invatedBy: '',
    pendingFriends: [],
    photoUrl: '',
    provider: '',
    username: '',
    sentFriendRequests: [],
    code: '',
  },
};

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<User>) => {
      state.userInfo = {...action.payload};
      state.isLogin = true;
    },
    removeUserInfo: (state, _action: PayloadAction) => {
      state.userInfo = initialState.userInfo;
      state.isLogin = false;
    },
    updateUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = {...state.userInfo, ...action.payload};
      state.isLogin = true;
    },
  },
});

const {reducer, actions} = user;
export const {addUserInfo, removeUserInfo, updateUserInfo} = actions;
export default reducer;
