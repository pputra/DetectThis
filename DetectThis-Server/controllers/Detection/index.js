const axios = require('axios');

module.exports = {
    TextDetection: (req, res) => {
        let data = {
            "requests":[
              {
                "image":{
                  "content":req.file.buffer.toString('base64')
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
        }).then(({ data }) => {
            let [ { fullTextAnnotation: { text } } ] = data.responses;

            res.status(201).json({
                message: 'Text has been analyzed successfully',
                data: text,
            });
        }).catch((err) => {
            res.status(500).json(err.response.data);
        });
    }
    
};
