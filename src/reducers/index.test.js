import reducers from '../reducers';
import * as actions from '../actions';

describe('reducers', () => {
  let initState = {};

  beforeEach(() => {
    initState = {
      resetForm: false,
      isProcess: false,
      isFetching: false,
      employeeList: [],
    };
  });

  test('should return the initial state', () => {
    const nextState = initState;
    expect(reducers(undefined, {})).toEqual(nextState);
  });

  test('should handle FETCH_EMPLOYEE_START', () => {
    const state = initState;
    const action = {
      type: actions.FETCH_EMPLOYEE_START,
    };
    const nextState = {
      ...initState,
      isFetching: true,
    };
    expect(reducers(state, action)).toEqual(nextState);
  });

  test('should handle FETCH_EMPLOYEE_SUCCESS', () => {
    const data = [1, 2, 3];
    const state = {
      ...initState,
      isFetching: true,
    };
    const action = {
      type: actions.FETCH_EMPLOYEE_SUCCESS,
      list: data,
    };
    const nextState = {
      ...initState,
      isFetching: false,
      employeeList: data,
    };
    expect(reducers(state, action)).toEqual(nextState);
  });

  test('should handle CREATE_EMPLOYEE_START', () => {
    const state = initState;
    const action = {
      type: actions.CREATE_EMPLOYEE_START,
    };
    const nextState = {
      ...initState,
      isProcess: true,
    };
    expect(reducers(state, action)).toEqual(nextState);
  });

  test('should handle CREATE_EMPLOYEE_SUCCESS', () => {
    const state = {
      ...initState,
      isProcess: true,
    };
    const action = {
      type: actions.CREATE_EMPLOYEE_SUCCESS,
    };
    const nextState = {
      ...initState,
      isProcess: false,
      resetForm: true,
    };
    expect(reducers(state, action)).toEqual(nextState);
  });

  test('should handle RESET_FORM_SUCCESS', () => {
    const state = {
      ...initState,
      resetForm: true,
    };
    const action = {
      type: actions.RESET_FORM_SUCCESS,
    };
    const nextState = {
      ...initState,
      resetForm: false,
    };
    expect(reducers(state, action)).toEqual(nextState);
  });
});
