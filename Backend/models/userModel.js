import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.parolaKontrol = async function (girilenParola) {
  return await bcrypt.compare(girilenParola, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;

// models/userModel.js

// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   isVerified: {
//     type: Boolean,
//     default: false
//   },
//   verificationToken: {
//     type: String,
//   },
// }, {
//   timestamps: true
// });

// userSchema.methods.parolaKontrol = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// const User = mongoose.model('User', userSchema);

// export default User;
