
let initState = {
    homePrice:'',
    daynum:''
}

let reducer = (state=initState,action)=>{
    switch (action.type) {
        case 'homePrice':
            return {
                ...state,
                homePrice:action.payload
            }
        case 'daynum':
            return {
                ...state,
                daynum:action.payload
            }
        default:{
            return state
        }
    }
    return state;
}

export default reducer;