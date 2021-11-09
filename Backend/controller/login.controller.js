const login = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;
      if (
        name == "" ||
        email == "" ||
        password == "" ||
        confirmpassword == ""
      ) {
        res.status(400).json({ message: "Empty inputs fields" });
      } else if (password.length < 8) {
        res.status(400).json({ message: "Password is short" });
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.status(400).json({ message: "Invalid email entered" });
      } else {
        if (password == confirmpassword) {
          const hashPassword = bcrypt.hashSync(password, 12);
          const data = { name, email, password: hashPassword,role: "customer",type_account: "Local"};
          const newuser = new login(data);
          await newuser.save(async (err,data) => {
            if (err) {
              res.status(400).json({ message: "Username that other User has already exist" });
            } else {
              const token = jwt.sign({ _id:data._id }, process.env.JWTPRIVATEKEY, {
                expiresIn: "1d",
              });
              const name = data.name 
              res.status(200).json(({ token, user:{name}}));
            }
          });
        } else {
          res.status(400).json({ message: "Password not match" });
        }
      }
    } catch (err) {
      res.status(500).json(error);
    }
  },
  signin: async (req, res) => {
    try {
      const user = await login.findOne({ email: req.body.email });
      if (!user) {
        res.status(400).json("Email is not found!");
      }
      const password = req.body.password;
      const checkPassword = await bcrypt.compareSync(password, user.password);
      if (checkPassword) {
        const token = jwt.sign({ user }, process.env.JWTPRIVATEKEY, {
          expiresIn: "1d",
        });
        res.status(200).json({ token, user });
      } else {
        res.status(400).json("Incorrect password!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  Google: async (req, res) => {
    try {
      const { tokenId } = req.body;
      const response = await axios({
        method: "post",
        url: `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`,
      });
      const { email_verified, name, email } = response.data;
      if (email_verified) {
        let find = await login.findOne({ email });
        if (find) {
            const token = jwt.sign({ _id: find._id }, process.env.JWTPRIVATEKEY, {
                expiresIn: "1d",
              });
          const { _id, name, email } = find;
          res.status(200).json({ token, user: { _id, name} });
        } else {
            const password = bcrypt.hashSync(process.env.JWTPRIVATEKEY, 12);
            let users = new login({name, email, password,role: "customer",type_account: "Google"});
            await users.save(async (err, data) => {
            if (err) {
             return res.status(400).json({ message: "Something went worng..." });
            }
            const token = jwt.sign({ _id: data._id }, process.env.JWTPRIVATEKEY, {expiresIn: "1d", });
            const { _id, name, email } = users;
            res.status(200).json({ token, user: { _id, name} });
          });
        }
      } else {
        res.status(400).json("not user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  Facebook: async (req, res) => {
    try {
  
      const email = req.body.user.email
			const response = await axios({
			  method: 'get',
			  url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=411525907158319
			  &client_secret=78f757065b20692a8bc46a94312cc44b&fb_exchange_token=${req.body.user.accessToken}`
			})
			const result = response.data
			const Authenticate = await axios({
			  method: 'get',
			  url: `https://graph.facebook.com/v2.11/${req.body.user.userId}/?fields=id,name,email&access_token=${result.access_token}`
			})
			if(Authenticate){
				let Get = await login.findOne({email})
        console.log(Get)
        if(Get){
                  const token = jwt.sign({ _id: Get._id }, process.env.JWTPRIVATEKEY, {
                    expiresIn: "1d",
                  });
					const {_id,name} = Get;
					res.status(200).json({token,user:{_id,name}})
				}else{
          const password = bcrypt.hashSync(process.env.JWTPRIVATEKEY, 12);
					let users = new login({name:Authenticate.data.name,email,password,role: "customer",type_account:"Facebook"})
					await users.save(async (err, information) => {
						if (err){
						  return res.status(400).json({error:"error"})
						}
						const token = jwt.sign({ _id: information._id }, process.env.JWTPRIVATEKEY, {
              expiresIn: "1d",
            });
						const {_id,name} = users;
						res.status(200).json({token,user:{_id,name}})
					  });
				}
			}else{
				res.status(400).json('not user')
			}
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
