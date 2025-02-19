
const aiServices = require('../services/ai.services.js');

module.exports.getReview = async (req, res) => {


    const { code } = req.body; // Use req.body instead of req.query

    if (!code) {
        return res.status(400).send("code is required");
    }

    const response = await aiServices(code);   

    res.send(response);
}