const mongoose = require("mongoose");
const Schema = require("./Schemas");
const myBooks = require("./InitialData");
const { SignUpSchema } = require("./Schemas");
const { UserSchema } = require("./Schemas");

const Books = mongoose.model("books", Schema);

const Students = mongoose.model("students", SignUpSchema);

const Users = mongoose.model("userinfos", UserSchema);



module.exports = Books;
module.exports.Students = Students;
module.exports.Users = Users;
