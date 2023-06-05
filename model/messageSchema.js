const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const messageSchema = new Schema(
  {
    name:{
        type:'string',
        required: true
    },
    email:{
        type:'string',
        required: true
    },
    phone:{
        type:'string',
        required: true
    },
    message:{
        type:'string',
        required: true
    },
  },
  {
    timestamps: true,
  }
);

const Message = model("Message", messageSchema);
module.exports = Message;
