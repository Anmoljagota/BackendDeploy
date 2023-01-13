const jwt = require("jsonwebtoken");
const Authentication = (req, res, next) => {
  const token = req.headers.authrization;
  console.log("toke",token);
  if (token) {
 const decode= jwt.verify(token,"loginuser");
 req.body.userId=decode.userId
 console.log("hlo",decode.userId);
 next()
  }
  else{
    res.send("Login first")
  }
};
module.exports={
    Authentication
}
