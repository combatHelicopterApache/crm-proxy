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
        if (targetResponse.data.status === true) {
           return res.status(targetResponse.status).send(targetResponse.data.result);
        } else {
            return res.status(400).send(targetResponse.data);
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

        if (response.data.status === true) {
            return res.status(response.status).send(response.data.result);
        } else {
            return res.status(400).send(targetResponse.data);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});


module.exports = router;
