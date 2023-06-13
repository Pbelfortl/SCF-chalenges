const admins = require("./admins")

module.exports = function (req, res, next) {

    try {
        
        //recebe as credenciais pelo campo headers
        const {login} = req.headers;
        const {password} = req.headers;

        //procura pela lista de admins
        const adm = admins.find(element => (element.login === login && element.password === password))

        if(!adm){
            return res.status(401).send("Unauthorized")
        }

        next()

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}