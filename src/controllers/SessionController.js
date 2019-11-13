const Usu = require("../models/Usuario");

module.exports = {
    async store(req, res){
        const{ email, senha} = req.body;
        console.log(email);
        
        const usu = await Usu.findOne({ email});

        if(!usu){
            return res.status(400).json({error: "User not found."});
        }
        if(!(await usu.compareHash(senha))){
            return res.status(400).json({error: "Senha inválida"});
        }
        return res.json({ usu, token: Usu.generateToken(usu)});
    }
};