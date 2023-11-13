const {Router} = require('express')
const axios = require('axios');
const router = Router();

router.post('/lead/register', async (req, res) => {
    try {

        const targetUrl = 'http://localhost:5000/api/v1/lead/register';

        const targetResponse = await axios.post(targetUrl, {...req.body}, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': req.headers['x-api-key']
            },
        })


        if (targetResponse.data.result && targetResponse.data.result.status === true) {
           return res.status(targetResponse.data.result.code).send(targetResponse.data.result);
        } else {
            return res.status(200).send(targetResponse.data);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.get('/leads', async (req, res) => {
    try {

        const targetUrl = 'http://localhost:5000/api/v1/lead/external-leads';

        const response = await axios.get(targetUrl, {
            params: req.query,
            headers: {
                'Content-Type': 'application/json',
                'api-key': req.headers['x-api-key'],
            },
        });

        if (response.data.result && response.data.result.status === true) {
            return res.status(response.data.result.code).send(response.data.result);
        } else {
            return res.status(200).send(response.data);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});


module.exports = router;
