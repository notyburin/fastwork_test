import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3030';

export const FETCH_EMPLOYEE_START = 'FETCH_EMPLOYEE_START';
export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const CREATE_EMPLOYEE_START = 'CREATE_EMPLOYEE_START';
export const CREATE_EMPLOYEE_SUCCESS = 'CREATE_EMPLOYEE_SUCCESS';
export const RESET_FORM_SUCCESS = 'RESET_FORM_SUCCESS';

export const fetchEmployeeStart = () => ({
  type: FETCH_EMPLOYEE_START,
});

export const fetchEmployeeSuccess = res => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  list: res.data,
});

export const createEmployeeStart = () => ({
  type: CREATE_EMPLOYEE_START,
});

export const createEmployeeSuccess = () => ({
  type: CREATE_EMPLOYEE_SUCCESS,
});

export const resetFormSuccess = () => ({
  type: RESET_FORM_SUCCESS,
});

export const createEmployee = data => (dispatch) => {
  dispatch(createEmployeeStart());
  return axios.post('/employees', data)
    .then(() => {
      dispatch(createEmployeeSuccess());
    });
};

export const fetchEmployee = () => (dispatch) => {
  dispatch(fetchEmployeeStart());
  return axios.get('/employees')
    .then((res) => {
      dispatch(fetchEmployeeSuccess(res));
    });
};
