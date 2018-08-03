import authReducer from '../../reducers/auth';

test('should set uid with login', () => {
    const uid = "jfsioh8923ha"
    const action = {
      type: 'LOGIN',
      uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
  });

  test('should clear uid with logout', () => {
    const action = {
      type: 'LOGOUT'
    };
    const state = authReducer({ uid:'anything' }, action);
    expect(state).toEqual({});
  });