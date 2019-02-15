export const LOGIN = 'Login';
export const login = () => ({type: LOGIN});

export const CHECK_USER = 'Check user';
export const check = () => ({type: CHECK_USER});

export const SET_USER = 'Set user';
export const setUser = data => ({type: SET_USER, data});