import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../actions';

describe('actions', () => {
  test('should create an action FETCH_EMPLOYEE_START', () => {
    const expectedAction = {
      type: actions.FETCH_EMPLOYEE_START,
    };
    expect(actions.fetchEmployeeStart()).toEqual(expectedAction);
  });

  test('should create an action FETCH_EMPLOYEE_SUCCESS', () => {
    const res = {
      data: [1, 2, 3],
    };
    const expectedAction = {
      type: actions.FETCH_EMPLOYEE_SUCCESS,
      list: res.data,
    };
    expect(actions.fetchEmployeeSuccess(res)).toEqual(expectedAction);
  });

  test('should create an action CREATE_EMPLOYEE_START', () => {
    const expectedAction = {
      type: actions.CREATE_EMPLOYEE_START,
    };
    expect(actions.createEmployeeStart()).toEqual(expectedAction);
  });

  test('should create an action CREATE_EMPLOYEE_SUCCESS', () => {
    const expectedAction = {
      type: actions.CREATE_EMPLOYEE_SUCCESS,
    };
    expect(actions.createEmployeeSuccess()).toEqual(expectedAction);
  });

  test('should create an action RESET_FORM_SUCCESS', () => {
    const expectedAction = {
      type: actions.RESET_FORM_SUCCESS,
    };
    expect(actions.resetFormSuccess()).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const mockAxios = new MockAdapter(axios);

  afterEach(() => {
    mockAxios.reset();
  });

  test('creates FETCH_EMPLOYEE_SUCCESS when fetching done', () => {
    const resData = [1, 2, 3];
    mockAxios.onGet('/employees').reply(200, resData);
    const store = mockStore({});
    const expectedActions = [
      { type: actions.FETCH_EMPLOYEE_START },
      { type: actions.FETCH_EMPLOYEE_SUCCESS, list: resData },
    ];

    return store.dispatch(actions.fetchEmployee()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('creates CREATE_EMPLOYEE_SUCCESS when create done', () => {
    const reqData = {
      firstname: '',
      lastname: '',
      salary: '',
    };
    mockAxios.onPost('/employees', reqData).reply(200, {});
    const store = mockStore({});
    const expectedActions = [
      { type: actions.CREATE_EMPLOYEE_START },
      { type: actions.CREATE_EMPLOYEE_SUCCESS },
    ];

    return store.dispatch(actions.createEmployee(reqData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
