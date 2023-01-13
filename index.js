const express = require("express");
require("dotenv").config();
const { connection } = require("./Configue/db");
const { AdminRoutes } = require("./Routes/Admin.Route");
const {RegisterRoute}=require("./Routes/Register.Route")
const {LoginRoute}=require("./Routes/login.Route")
const {Authentication}=require("./Middlewares/Auth")
const app = express();
app.use(express.json());
app.use("/register",RegisterRoute)
app.use("/login",LoginRoute)
app.use(Authentication)
app.use("/products",AdminRoutes)
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(`error:${err}`);
  }
  console.log(`listening on port ${process.env.PORT}`);
});
