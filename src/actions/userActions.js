import {
  GET_USERS,
  SET_LOADING,
  USERS_ERROR,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

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

export const updateUser = (user) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/users/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.data,
    });
  }
};

// Set current log
export const setCurrent = (user) => {
  return {
    type: SET_CURRENT,
    payload: user,
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
