
let initState = {
    isSelect : '',
    price : ''
}

let reducer = (state=initState,action)=>{
    switch (action.type) {
        case 'isSelect':
            return {
                ...state,
                isSelect:action.payload
            }
        case 'price':
            return {
                ...state,
                price:action.payload
            }
        default:{
            return state
        }
    }
    return state;
}

export default reducer;