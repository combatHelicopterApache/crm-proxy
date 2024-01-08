module.exports  = async (req, res, next) => {
    if(!req.headers['x-api-key']) {
        return res.status(401).json({message: 'Not authorized!'} );
    }
    next()
}

