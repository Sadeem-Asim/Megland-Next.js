import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb+srv://test:test@cluster0.w1vf31v.mongodb.net/testing",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: String,
});

const tokenSchema = new mongoose.Schema({
  from: String,
  to: String,
  wallet_address: String,
  timestamp: String,
  signature: String,
});
const Token = new mongoose.model("token", tokenSchema);

app.get("/api/get", async (req, res) => {
  const tokens = await Token.find();
  res.status(200).json({
    results: tokens.length,
    tokens,
  });
});
app.get("/api/get/standard", async (req, res) => {
  res.status(200).json({
    name: "Standard land",
    description: "Standard land",
    image: "https://themegland.io/img/standard.png",
  });
});
app.get("/api/get/premium", async (req, res) => {
  res.status(200).json({
    name: "Premium land",
    description: "Premium land",
    image: "https://themegland.io/img/premium.png",
  });
});
app.get("/api/get/genesis", async (req, res) => {
  res.status(200).json({
    name: "Genesis Land",
    description: "Genesis Land",
    image: "https://themegland.io/img/GENESIS.png",
  });
});

app.get("/api/get/:address", async (req, res) => {
  let address = req.params.address;
  address = address.toLowerCase();
  const token = await Token.findOne({ wallet_address: address });
  if (!token) {
    res.status(404).json({ status: "failed", message: "Token Not Found" });
  } else {
    res.status(200).json({
      token,
    });
  }
});
app.post("/api/add", (req, res) => {
  let { from, to, wallet_address, signature } = req.body;
  wallet_address = wallet_address.toLowerCase();

  Token.findOne({ wallet_address: wallet_address }, (err, token) => {
    if (token) {
      res.send({ message: "Allready Added", token });
    } else {
      const token = new Token({
        from,
        to,
        wallet_address,
        signature,
      });
      token.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully add" });
        }
      });
    }
  });
});

app.post("/api/update", async (req, res) => {
  try {
    let { wallet_address, signature, sigTime } = req.body;
    wallet_address = wallet_address.toLowerCase();
    const result = await Token.findOneAndUpdate(
      { wallet_address },
      { signature: signature, timestamp: sigTime },
      { new: true }
    );
    console.log(result);
    res.status(201).send({ message: "Successfully updated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/api/register", (req, res) => {
  const { name, email, password, number } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
        number,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});
