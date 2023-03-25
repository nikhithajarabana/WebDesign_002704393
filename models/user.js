
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const passwordString = "somerandomstring";
const saltRounds = 10;

const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return re.test(password);
};

const validateFullName = (fullName) => {
  var re = /^[a-zA-Z ]{2,30}$/;
  return re.test(fullName);
};

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: [validateFullName, "Please enter a valid name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    validate: [validatePassword, "Please enter a valid password.The password must contain atleast one uppercase,one lowercase, one special character and must be minimum 6 characters and less than 20 characters in length."],
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

module.exports = mongoose.model("User", userSchema);
