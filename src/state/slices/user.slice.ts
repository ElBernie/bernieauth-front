import { createSlice } from '@reduxjs/toolkit';

import { UserSlice } from '../../types/user.type';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: Partial<UserSlice> = {};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserSlice>) => {
			const newState = { ...state, ...action.payload };
			return newState;
		},
	},
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
