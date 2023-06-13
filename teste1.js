const data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    try{

        const {name} =  req.query;
        let user

        data.forEach(usr => {
            if(usr.name === name){
                user = usr
                usr.counter++
                return
            }
        })
    
        if(!user){
            return res.sendStatus(404)
        }

        res.status(200).send({id: user.id, name: user.name, job: user.job})

    } catch (error) {
        res.sendStatus(500)
    }
};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};