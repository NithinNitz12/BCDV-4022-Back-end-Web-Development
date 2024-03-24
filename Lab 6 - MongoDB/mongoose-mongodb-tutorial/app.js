const mongoose = require("mongoose");
const User = require("./user");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myappdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", async () => {
  console.log("Connected to MongoDB");

  try {
    // Create a new user instance
    const newUser = new User({
      name: "Nithin Raj",
      email: "NithinRaj@example.com",
      age: 24,
    });

    await newUser.save();

    console.log("User saved successfully");
  } catch (error) {
    console.error("Error saving user:", error);
  } finally {
    mongoose.connection.close();
  }
});
