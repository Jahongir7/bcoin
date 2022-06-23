const defaultLang = localStorage.getItem('shrift') ? localStorage.getItem('shrift') : 'orta';
const initialState = {
  shrift: defaultLang,
  error: {}
};

function shriftReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SHRIFT_CHANGED':
      return {
        ...state,
        shrift: payload
      };
    default:
      return state;
  }
}

export default shriftReducer;
