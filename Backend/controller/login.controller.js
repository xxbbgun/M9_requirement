const login = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
module.exports = {
    register: async (req, res) => {
        try {
            const { name, email, password,confirmpassword } = req.body
            if (name == "" ||email == "" ||password == ""||confirmpassword == "") {
				res.status(400).json({	message: "Empty inputs fields"});
			} else if (password.length < 8) {
				res.status(400).json({message: "Password is short"});
			} 
			else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
				res.status(400).json({message: "Invalid email entered"});
			} else {
                if(password==confirmpassword){
                    const hashPassword = bcrypt.hashSync(password, 12);
                    const data = { name, email, password: hashPassword }
                    const user = new login(data);
                    await user.save(async (err) => {
                        if (err) {
                            res.status(400).json("Username that other User has already exist");
                            console.log(err)
                        } else {
                            const token = jwt.sign({ _id: data }, process.env.JWTPRIVATEKEY, { expiresIn: '1d' })
                            res.status(200).json({ token, user });
                        }
                    })
                    }else{
                        res.status(400).json({message:"Password not match"});
                    }

            }
           
        }
        catch (err) {
            res.status(500).json(error);
        }

    },
    signin: async (req, res) => {
        try {
            const user = await login.findOne({ email: req.body.email });
            if (!user) {
                res.status(400).json("Email is not found!");
            };
            const password = req.body.password;
            const checkPassword = await bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                const token = jwt.sign({ user }, process.env.JWTPRIVATEKEY, { expiresIn: '1d' });
                res.status(200).json({ token, user });
            } else {
                res.status(400).json("Incorrect password!");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

}