const {Router} = require('express')
const axios = require('axios');
const router = Router();

router.post('/register', async (req, res) => {
    try {

        const targetUrl = 'http://localhost:5000/api/v1/lead/register';

        const targetResponse = await axios.post(targetUrl, {...req.body}, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (targetResponse) {
            res.header('Content-Type', 'application/json');
            res.status(targetResponse.status).json(targetResponse);
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

router.get('/status', async (req, res) => {
    try {

        const targetUrl = 'http://localhost:5000/api/v1/lead/status';

        const targetResponse = await axios.post(targetUrl, {...req.query}, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (targetResponse) {
            return res.status(200).send(JSON.stringify(targetResponse.data));
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});

module.exports = router;
