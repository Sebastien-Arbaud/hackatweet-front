import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.value.push(action.payload);
		},
		removeTweet: (state, action) => {
			state.value = state.value.filter(e => e.tweet !== action.payload.tweet);
		},
	},
});

export const { addTweet, removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;