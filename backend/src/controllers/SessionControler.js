//index, show, store, update and destroy
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email }); //acho que aqui é find

        if (!user) {
            user = await User.create({
                email
            }); //tem que criar nome e idade tbm
        }

        return res.json(user);
    }
};