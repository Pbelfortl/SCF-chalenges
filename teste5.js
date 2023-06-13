const data = require("./fakeData")

module.exports = function(req, res){
    
    const name =  req.query.name;
    const user = data.find(usr => usr.name === name)

    res.send(`Usuário ${name} foi lido ${user.counter} vezes.`);

};