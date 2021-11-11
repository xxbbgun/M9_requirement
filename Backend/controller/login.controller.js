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
        return  res.status(400).json({ message: "Empty inputs fields" });
      } else if (password.length < 8) {
        return  res.status(400).json({ message: "Password is short" });
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return  res.status(400).json({ message: "Invalid email entered" });
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
              const role = data.role 
              res.status(200).json(({ token, user:{name,role}}));
            }
          });
        } else {
          return  res.status(400).json({ message: "Password not match" });
        }
      }
    } catch (err) {
      return res.status(500).json(error);
    }
  },
  signin: async (req, res) => {
    try {
      const {email} = req.body;
      const user = await login.findOne({email});
      if(user.role === 'admin'){
        if(user.password === req.body.password){
          const token = jwt.sign({ _id:user._id }, process.env.JWTPRIVATEKEY, {
            expiresIn: "1d",
          });
          const name = user.name 
          const role = user.role 
          console.log(role)
          return res.status(200).json({ token, user:{name,role}});
          
        }
       return res.status(400).json({ message: "Password is wrong" });
      }else if(user.role === 'customer'){
        const password = req.body.password;
        const checkPassword = await bcrypt.compareSync(password, user.password);
        if (checkPassword) {
          const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
            expiresIn: "1d",
          });
          const name = user.name 
          const role = user.role
          return res.status(200).json({ token, user:{name,role}});
        } else {
          return  res.status(400).json({ message: "Password is wrong" });
        }
      }else{
        return  res.status(400).json({ message: "Email not found" });
      }
         
    } catch (error) {
      return res.status(400).json({ message: "Email not found" });
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
          const { _id, name, email,role} = find;
          return res.status(200).json({ token, user: { _id, name,role} });
        } else {
            const password = bcrypt.hashSync(process.env.JWTPRIVATEKEY, 12);
            let users = new login({name, email, password,role: "customer",type_account: "Google"});
            await users.save(async (err, data) => {
            if (err) {
             return res.status(400).json({ message: "Something went worng..." });
            }
            const token = jwt.sign({ _id: data._id }, process.env.JWTPRIVATEKEY, {expiresIn: "1d", });
            const { _id, name, email,role} = users;
            return res.status(200).json({ token, user: { _id, name ,role} });
          });
        }
      } else {
        return  res.status(400).json("not user");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
};
