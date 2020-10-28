export const addBook = (payload) => dispatch =>{
    dispatch({
        type:'ADD_BOOK',
        payload
    })
}

export const deleteBook = (id) => dispatch =>{
    dispatch({
        type:'DELETE_BOOK',
        payload:id
    })
}

export const bookStatusChange = (id,status) => dispatch =>{
    dispatch({
        type:'BOOK_STATUS_CHANGE',
        payload:{id,status}
    })
}

export const bookQuantityIncrease = (id) => dispatch =>{
    dispatch({
        type:'BOOK_QUANTITY_INCREASE',
        payload:{id}
    })
}
export const bookQuantityDecrease = (id) => dispatch =>{
    dispatch({
        type:'BOOK_QUANTITY_DECREASE',
        payload:{id}
    })
}

export const clearBooks = () => dispatch =>{
    dispatch({
        type:'CLEAR_BOOKS'
    })
}

export const resetBooks = () => dispatch =>{
    dispatch({
        type:'RESET_BOOK_STORE'
    })
}