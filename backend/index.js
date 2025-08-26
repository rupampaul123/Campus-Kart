const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const user = require("./models/user.js");
const listing = require("./models/listing.js");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));


mongoose.connect("mongodb://127.0.0.1:27017/CampusKart")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get('/', async (req, res) => {
  try {
    const allListings = await listing.find(); 
    res.status(200).json(allListings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings', details: err.message });
  }
});

app.get('/category/:id', async (req,res) => {
  const cat = await listing.find({category:`${req.params.id}`});
  res.send(cat);
})

app.get('/info/:id', async (req,res) => {
  const info = await listing.findById(req.params.id);
  res.send(info);
})


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await user.findOne({ email });
  if (existing) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  const newUser = new user({ name, email, password: hashed });
  await newUser.save();


  const token = jwt.sign({ id: newUser._id }, "123");

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,   
    sameSite: "lax",
  });

  res.json({ message: "Registered & logged in successfully" });
});




app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const found = await user.findOne({ email });
    if (!found) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, found.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

   
    const token = jwt.sign({ id: found._id }, "123", { expiresIn: "7d" });

  
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,        
      sameSite: "lax",      
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",          
    });

    return res.json({ message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});




function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, "123"); 
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}



app.get("/mylistings", auth, async (req, res) => {
  const listings = await listing.find({ userId: req.user.id });
  res.json(listings);
});


app.post("/addlisting", auth, async (req, res) => {
  try {
    const { title, description, price, category, images } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newListing = new listing({
      title,
      description,
      price,
      category,
      images,
      userId: req.user.id 
    });

    await newListing.save();
    res.status(201).json({ message: "Listing added successfully", newListing });
  } catch (err) {
    res.status(500).json({ message: "Failed to add listing", error: err.message });
  }
});
