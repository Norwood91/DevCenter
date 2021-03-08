import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

//GET CURRENT USER'S PROFILE
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//CREATE OR UPDATE PROFILE
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/profile/', formData, config);
    dispatch({ type: GET_PROFILE, payload: res.data });
    dispatch(
      setAlert(
        //If editing profile, show first message, if creating profile show 2nd
        edit ? 'Profile Updated Successfully' : 'Profile Created Successfully',
        'success'
      )
    );
    if (!edit) {
      //Redirects to the dashboard after creating a profile, but not after editing profile
      history.push('/dashboard');
    }
  } catch (err) {
    //The array of errors in the server is called errors
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
