const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { MongoClient } = require("mongodb");
var http = require("http");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let finalHash = "";

const uri = 
    "mongodb+srv://jarabanan:nikhithajarabana@cluster0.slafozy.mongodb.net/?retryWrites=true&w=majority";

//const uri = 'mongodb://127.0.0.1/UserDatabase';
const client = new MongoClient(uri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(8000, async function () {
  console.log("Server starting on port 8000");
});

app.get("/", function (req, res) {
  res.send("This is a sample test message");
});

app.post("/user", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  var regExEmail = /([\w\.]+)@northeastern.edu/;
  var regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (name == "" || name == undefined) {
    res.send("Name cannot be empty, please check");
  } else if (email == "empty" || email == undefined) {
    res.send("Email cannot be empty, please check");
  } else if (!email.trim().match(regExEmail)) {
    res.send("Enter a valid Northeastern email address");
  } else if (password == "" || password == undefined) {
    res.send("Password cannot be empty, please check");
  } else if (!password.trim().match(regexPassword)) {
    res.send("Enter a valid password");
  } else {
    try {
      getHash(req.body.password, function (response) {
        req.body.password = response;
      });

      await client.connect();
      const result = await client
        .db("UserDatabase")
        .collection("User")
        .insertOne(req.body);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
    res.send("User added successfully");
  }
});

app.post("/user/validate", async function (req, res) {
  const email = req.body.email;
  try {
    var isValid = false;
    await client.connect();
    let result = await client.db("UserDatabase").collection("User").findOne({
      email: email,
    });

    if (result != null && result != undefined) {
      await checkPassword(
        req.body.password,
        result.password,
        function (response) {
          isValid = response;
          if (
            result != undefined &&
            result != null &&
            result.email != undefined
          ) {
            // Set filter and options
            if (isValid === true) {
              res.statusCode = 200;
              res.send({
                isValid: true,
                message: "User verfied successfully",
              });
            } else {
              res.statusCode = 403;
              res.send({ isValid: false, message: "User is invalid" });
            }
          } else {
            res.send({ isValid: false, message: "User not found" });
          }
        }
      );
    } else res.send({ isValid: false, message: "User not found" });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

app.put("/user", async function (req, res) {
  var regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const email = req.body.email;
  if (
    req.body.email != "" &&
    req.body.password != "" &&
    req.body.password.trim().match(regexPassword)
  ) {
    try {
      var hash = "";
      getHash(req.body.password, function (response) {
        hash = response;
      });
      await client.connect();
      let result = await client.db("UserDatabase").collection("User").findOne({
        email: email,
      });
      if (result != undefined && result != null && result.email != undefined) {
        result.name = req.body.name;
        result.password = hash;

        // Set filter and options
        const filter = { email: email };
        const options = { upsert: false };

        const isUpdated = await client
          .db("UserDatabase")
          .collection("User")
          .updateOne(filter, { $set: result }, options);

        res.send("User updated successfully");
      } else {
        res.send("User not found");
      }
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
  } else {
    res.send("Enter valid details");
  }
});

app.get("/user/:emailId", async function (req, res) {
  try {
    await client.connect();
    const result = await client.db("UserDatabase").collection("User").findOne({
      email: req.params.emailId,
    });
    res.send(result);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

app.get("/user", async function (req, res) {
  try {
    await client.connect();
    const result = await client.db("UserDatabase").collection("User").find({});
    let list = [];
    await result.forEach((item) => list.push(item));
    res.send(list);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

app.delete("/user/:emailId", async function (req, res) {
  try {
    const query = { email: req.params.emailId };
    await client.connect();
    const result = await client
      .db("UserDatabase")
      .collection("User")
      .deleteOne(query);
    if (result.deletedCount == 1) {
      res.send("Deleted Successfully");
    } else {
      res.send("Deletion unsuccessful");
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

function getHash(password, callback) {
  bcrypt.hash(password, saltRounds, function (err, hash) {
    callback(hash);
  });
}

async function checkPassword(newPwd, hash, callback) {
  bcrypt.compare(newPwd, hash, function (err, result) {
    console.log(result);
    callback(result);
  });
}
