const express = require("express");
const app = express();
const cors = require("cors");
const db = require("../dbconne/dbconn");
const userSchmea = require("../models/users");
const port = 7777;
const hostName = "127.0.0.1";

app.use(cors());
app.use(express.json());
app.get("/getdata", async (req, res) => {
  const userdata = await userSchmea.find({});
  res.send(userdata);
});
app.post("/product", async (req, res) => {
  // console.log(req.body);
  try {
    const { title, price, image, description, OfferPrice } = req.body;
    const newprice = Number(price);
    const newofferprice = Number(OfferPrice);
    // Calculate final price after discount
    const offerPrice = newprice - (newprice * OfferPrice) / 100;
    console.log(newprice);
    console.log(newofferprice);

    const newProduct = new userSchmea({
      title,
      price,
      image,
      description,
      OfferPrice: offerPrice, // Final discounted price
    });

    await newProduct.save();

    res.json({ message: "Product saved", data: newProduct });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

app.post("/login", (req, res) => {
  res.send("login successful");
});

app.delete("/delete/:userid", async (req, res) => {
  const userID = req.params.userid;
  console.log(userID);
  const userdeleteed = await userSchmea.findByIdAndDelete(userID);
  res.send(userdeleteed);
});

app.put("/updateitem", (req, res) => {
  res.send("updated Successfully");
});

db().then(() => {
  console.log("Database connected successfully");
  app.listen(port, hostName, () => {
    console.log(`Server is running at ${hostName}:${port}`);
  });
});

// let users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukone", age: 26 },
// ];
// // 1 find out list of full names of all the users

// // ["akshay saini", "donald trump", "elon musk", "deepika padukone "];
