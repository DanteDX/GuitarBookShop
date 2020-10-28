export const addGuitar = (payload) => dispatch =>{
    dispatch({
        type:'ADD_GUITAR',
        payload
    })
}

export const deleteGuitar = (id) => dispatch =>{
    dispatch({
        type:'DELETE_GUITAR',
        payload:id
    })
}

export const guitarStatusChange = (id,status) => dispatch =>{
    dispatch({
        type:'GUITAR_STATUS_CHANGE',
        payload:{id,status}
    })
}

export const guitarQuantityIncrease = (id) => dispatch =>{
    dispatch({
        type:'GUITAR_QUANTITY_INCREASE',
        payload:{id}
    })
}
export const guitarQuantityDecrease = (id) => dispatch =>{
    dispatch({
        type:'GUITAR_QUANTITY_DECREASE',
        payload:{id}
    })
}
export const clearGuitars = () => dispatch =>{
    dispatch({
        type:'CLEAR_GUITARS'
    })
}

export const resetGuitars = () => dispatch =>{
    dispatch({
        type:'RESET_GUITAR_STORE'
    })
}