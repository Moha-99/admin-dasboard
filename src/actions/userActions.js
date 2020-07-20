import { GET_USERS, SET_LOADING, USERS_ERROR, ADD_USER } from './types';

export const getUsers = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/users');
    const data = await res.json();
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.data,
    });
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
