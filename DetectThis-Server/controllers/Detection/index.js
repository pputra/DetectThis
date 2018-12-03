const axios = require('axios');
const { generatePayload, hasEmptyResponse, appanedLabelResults } = require('../../helpers/gCloudVision');

module.exports = {
    TextDetection: (req, res) => {
        let data = generatePayload(req, 'DOCUMENT_TEXT_DETECTION');
        axios({
            method: 'POST',
            url: `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`,
            data: data,
        }).then(({ data }) => {
            if (hasEmptyResponse(data)) {
                return res.status(400).json({message: 'unable to detect the text'});
            }

            let [ { fullTextAnnotation: { text } } ] = data.responses;

            res.status(201).json({
                message: 'Text has been analyzed successfully',
                data: text,
            });
        }).catch((err) => {
            res.status(500).json(err.response.data);
        });
    },
    BrandDetection: (req, res) => {
        let data = generatePayload(req, 'LOGO_DETECTION');
        axios({
            method: 'POST',
            url: `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`,
            data: data,
        }).then(({ data }) => {
            if (hasEmptyResponse(data)) {
               return res.status(400).json({message: 'unable to detect the brand'});
            }

            let [ { logoAnnotations: [{ description }] }] = data.responses;

            res.status(201).json({
                message: 'Brand has been analyzed successfully',
                data: description,
            });
        }).catch((err) => {
            res.status(500).json(err.response.data);
        });
    },
    ObjectDetection: (req, res) => {
        let data = generatePayload(req, 'LABEL_DETECTION');
        axios({
            method: 'POST',
            url: `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`,
            data: data,
        }).then(({ data }) => {
            if (hasEmptyResponse(data)) {
                return res.status(400).json({message: 'unable to detect the object'});
            }
            
            res.status(201).json({
                message: 'Object has been analyzed successfully',
                data: appanedLabelResults(data),
            });
        }).catch((err) => {
            res.status(500).json(err.response.data);
        });
    },
};
