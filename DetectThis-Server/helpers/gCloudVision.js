module.exports = {
    generatePayload: (req, detectionType) => {
        return {
            "requests":[
              {
                "image":{
                  "content":req.file.buffer.toString('base64')
                },
                "features":[
                  {
                    "type":detectionType,
                    "maxResults":5
                  }
                ]
              }
            ]
        };
    },
    hasEmptyResponse: (data) => {
        return Object.keys(data.responses[0]).length === 0;
    },
    appanedLabelResults: (data) => {
        let [{ labelAnnotations }] = data.responses;
        let result = [];
        labelAnnotations.forEach(label => {
            result.push(label.description);
        });
        return (result);
    } 
};
