const authReducer = (state,{type,payload})=>{
    switch(type){
        case 'INIT_AUTH':
            return {...state, user:null,error:''}
        case 'UPDATE_USER':
            return {...state,user:payload}
        case 'FAILURE':
            return{...state, error:payload}
        default:
            return state
    }
}
export {authReducer}