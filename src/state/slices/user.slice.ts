import { createSlice } from '@reduxjs/toolkit';

import { UserSlice } from '../../types/user.type';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState = (): Partial<UserSlice> => {
	const userData = localStorage.getItem('user');
	if (userData) {
		return JSON.parse(userData) as UserSlice;
	} else {
		return {};
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserSlice>) => {
			const newState = { ...state, ...action.payload };
			return newState;
		},
		logOut: () => {
			return {};
		},
	},
});

export const { setUserData, logOut } = userSlice.actions;
export default userSlice.reducer;
