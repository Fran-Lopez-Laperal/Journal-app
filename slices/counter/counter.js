export const counterSlice = createSlice({
    name: 'counter',
    intitiaState: {
        counter: 10
    },
    reducers:{
        increment : (state) => {
            state.counter += 1
        }
    }
})

export const {increment} = counterSlice.actions;