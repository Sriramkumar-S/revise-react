import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    isLoading: true,
    errorMsg: '',
    data: {}
}
const reducer = (currState, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...currState,
                isLoading: false,
                errorMsg: '',
                data: action.payload
            }
        case 'FETCH_ERROR':
            return {
                ...currState,
                isLoading: false,
                errorMsg: 'Error in retrieving data',
                data: {}
            }
    }
}
function UseReducerFetchData() {
    const [post, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response.data)
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])
  return (
    <div>
      { post.isLoading ? 'Loading...' : <div>{post.data.title}</div> }
      { post.errorMsg != '' && post.errorMsg }
    </div>
  )
}

export default UseReducerFetchData
