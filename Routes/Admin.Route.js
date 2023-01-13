const { AdminModel } = require("../Models/AdminModel");
const express = require("express");
const app = express();
app.use(express.json());

const AdminRoutes = express.Router();

AdminRoutes.get("/", async (req, res) => {
  try {
    let getData = await AdminModel.find();
    res.send(getData);
  } catch (err) {
    res.send(`error:${err}`);
  }
});
AdminRoutes.post("/", async (req, res) => {
  console.log("update",req.body);
  try {
    let postdata = new AdminModel(req.body);
    await postdata.save();
    res.send("Product is Created");
  } catch (err) {
    res.send(`error:${err}`);
  }
});
AdminRoutes.patch("/:id", async (req, res) => {
  let updateData = req.body;
  console.log("update",updateData);
  const update_product_userId = req.body.userId;
  try {
    if (update_product_userId !== req.params.id) {
      res.send("you are not autrized to update this");
    } else {
      let Data = await AdminModel.findByIdAndUpdate(
        { _id: req.params.id },
        updateData
      );
      res.send("Data Updated");
    }
  } catch (err) {
    res.send(`error:${err}`);
  }
});
AdminRoutes.delete("/:id", async (req, res) => {
  try {
    await AdminModel.findByIdAndDelete({ _id: req.params.id });
    res.send("Data Deleted");
  } catch (err) {
    res.send(`error:${err}`);
  }
});
module.exports = {
  AdminRoutes,
};
