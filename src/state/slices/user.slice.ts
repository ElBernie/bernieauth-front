import { createSlice } from '@reduxjs/toolkit';

import { UserSlice } from '../../types/user.type';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: Partial<UserSlice> = {
	id: undefined,
	firstName: undefined,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserSlice>) => {
			state = action.payload;
		},
	},
});

export const setUserData = userSlice.actions;
export default userSlice.reducer;
