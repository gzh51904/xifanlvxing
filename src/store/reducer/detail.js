
let initState = {
    homePrice:''
}

let reducer = (state=initState,action)=>{
    switch (action.type) {
        case 'homePrice':
            return {
                ...state,
                homePrice:action.payload
            }
        default:{
            return state
        }
    }
    return state;
}

export default reducer;