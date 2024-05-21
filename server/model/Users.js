// const mongoose = require('mongoose')

// const UsersSchema = new mongoose.Schema({
//     name : String
// })

// const UserModel=mongoose.model('users',UsersSchema)
// module.exports = UserModel;
const mongoose = require('mongoose');

// Define the schema
const UsersSchema = new mongoose.Schema({
    site_name: String,
    article_title: String,
    article_desc: String,
    left_block_content: String,
    p_tags: [String]  // Array of strings
});

// Create the model
const UserModel = mongoose.model('web_datas', UsersSchema);

// Export the model
module.exports = UserModel;
