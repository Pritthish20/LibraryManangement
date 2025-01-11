import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 64,
    required: true,
  },
  phone:{
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
  },

  borrowed:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Books',  // Reference to the 'Books' model
  },
],

  isAdmin:{
    type: Boolean,
    default: false,
  }
}, {timestamps: true});

export default mongoose.model("Users", userSchema);