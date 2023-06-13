const data =  require("./fakeData");

module.exports = function (req, res) {
    
    try {
        const name =  req.query.name;

        for(let i = 0; i < data.length;  i++) {
            if(data[i].name === name) {
                data.splice(i, 1)
                return res.status(200).send('Success!')
            }
        }

        res.status(404).send("User not found!")

    } catch (error) {

        res.sendStatus(500);
    }
    
};