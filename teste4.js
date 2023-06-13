const data =  require("./fakeData"); 

module.exports =  function(req, res) {
  
    const id =  Number(req.query.id);

    try {
        const reg = data.find(d => d.id === id);
        const name = req.body.name;
        const job = req.body.job;

        if(!name || !job){
            return res.sendStatus(400)
        }

        if(!reg){
            return res.sendStatus(404)
        }

        data.forEach(usr => {
            if(usr.id === id){
                usr.name = name
                usr.job = job
                return
            }
        })

        const updReg = data.find(d => d.id === id);
        res.status(201).send(updReg);

    } catch (error) {
        res.sendStatus(500)
    }
};