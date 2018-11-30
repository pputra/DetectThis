const initialState = {
  detectedObject: '',
  loading: false,
  error: '',
};

const detectedObjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETECT_OBJECT_SUCCESS':
      return {
        ...state,
        detectedObject: action.payload,
        loading: false,
        error: '',
      };
    case 'DETECT_OBJECT_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'DETECT_OBJECT_FAILED':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  };
};

export default detectedObjectReducer;

