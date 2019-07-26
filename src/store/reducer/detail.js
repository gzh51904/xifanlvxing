
let initState = {
    ih : ''
}

let reducer = (state=initState,action)=>{
    switch (action.type) {
        case 'getih':
            return {
                ...state,
                ih:action.payload
            }
        default:{
            return state
        }
    }
    return state;
}

export default reducer;