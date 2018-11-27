import axios from 'axios';

import port from '../../config';

export default () => {
  return (dispatch) => {
    dispatch({ 
        type: 'DETECT_OBJECT_LOADING', 
    });

    axios({
        method: 'POST',
        url: `${port}/detections/text`
    }).then(({ data }) => {
      let { data } = data;

      dispatch({
        type: 'DETECT_OBJECT_SUCCESS',
        payload: data,
      });

    }).catch((err) => {
      dispatch({
        type: 'DETECT_OBJECT_FAILED',
        payload: 'Unable to detect the object',
      });
      
    });
  };
};


