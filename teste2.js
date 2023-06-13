const data =  require("./fakeData");

module.exports = (req, res) => {

    try{

        const {name} =  req.body;
        const {job} =  req.body;

        if(!name || !job) {
            return res.sendStatus(400)
        }
    
        let id = data[data.length-1].id+1
        let idInUse = data.find(user => user.id === id) //confere se o id já está sendo utilizado
    
        while (idInUse) {
            id++
            idInUse = data.find(user => user.id === id)
        }

        const newUser = {
            id: id,
            name: name,
            job: job,
        }

        data.push(newUser)
        res.send(newUser);

    } catch (error) {
        res.status(500).send(error)
    }
 
};