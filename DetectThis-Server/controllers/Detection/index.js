const axios = require('axios');

module.exports = {
    TextDetection: (req, res) => {
        let data = {
            "requests":[
              {
                "image":{
                  "source":{
                    "imageUri":
                      req.body.imageUri
                  }
                },
                "features":[
                  {
                    "type":"DOCUMENT_TEXT_DETECTION",
                    "maxResults":1
                  }
                ]
              }
            ]
        };

        axios({
            method: 'POST',
            url: `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`,
            data: data,
        }).then((result) => {
            res.status(200).json(result.data);
        }).catch((err) => {
            res.status(500).json(err.response.data);
        });
    }
    
};
