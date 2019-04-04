const isDebug = (process.env.OBJ_ENV === 'pro');
export default {
  apiUrl: isDebug ? '' : ''
};
