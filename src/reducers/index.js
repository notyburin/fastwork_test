import {
  FETCH_EMPLOYEE_START,
  FETCH_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_START,
  CREATE_EMPLOYEE_SUCCESS,
  RESET_FORM_SUCCESS,
} from '../actions';

const initState = {
  resetForm: false,
  isProcess: false,
  isFetching: false,
  employeeList: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        employeeList: action.list,
      };
    case CREATE_EMPLOYEE_START:
      return {
        ...state,
        isProcess: true,
      };
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isProcess: false,
        resetForm: true,
      };
    case RESET_FORM_SUCCESS:
      return {
        ...state,
        resetForm: false,
      };
    default:
      return state;
  }
};
