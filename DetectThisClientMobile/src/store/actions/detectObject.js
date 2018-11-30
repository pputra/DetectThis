import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

import { port } from '../../config';

export default (type) => {
  return (dispatch) => {
    
    const options = {
      title: 'Select an image to detect',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      
      console.log('Response = ', response);

      if (response.didCancel) {

        console.log('User cancelled image picker');

      } else if (response.error) {

        console.log('ImagePicker Error: ', response.error);

      } else {

        const fileInput = new FormData();

        fileInput.append('fileInput', {
          uri: response.uri,
          type: response.type,
          name: response.fileName
        });

        dispatch({ 
          type: 'DETECT_OBJECT_LOADING', 
        });

        axios({
            method: 'POST',
            url: `${port}/detections/${type}`,
            data: fileInput
        }).then(({ data }) => {
         
          dispatch({
            type: 'DETECT_OBJECT_SUCCESS',
            payload: data.data,
          });

        }).catch((err) => {

          dispatch({
            type: 'DETECT_OBJECT_FAILED',
            payload: 'Unable to detect the object',
          });

        });
      }
    });
  };
};


