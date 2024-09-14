const initial_State = {
    cart: []
}
export const Reducer = (state = initial_State, action) => {
    switch (action.type) {
        case 'Add_Cart':

            return {
                ...state,
                cart: [...state.cart, action.data]
            }


        // const IndexItem=state.cart.findIndex((item)=> item.is === action.data.id)

        // if(IndexItem>=0){
        //     state.cart[IndexItem].images.length += 1
        // }else{
        //     const temp ={...action.data,images,length:1}
        //     return{
        //         ...state,
        //         cart:[...state.cart,temp]
        //     }
        // }

        case 'Remove_Cart':
            let dlt = state.cart.filter((el) => el.id !== action.data)
            return {
                ...state,
                cart: dlt
            }
        default:
            return state
    }
}