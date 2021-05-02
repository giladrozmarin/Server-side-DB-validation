import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: [true, 'Please enter First Name']
    },
    last_name : {
        type: String,
        trim: true,
        required: [true, 'Please enter Last Name']
    },
 
    email: {
        type: String,
        match: [
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please add a valid email address.',
        ],
        required: [true, 'Please enter Email Address'],
        unique: true,
        lowercase: true,
        dropDups: true
      },
  phone :  {
    type: String,
    validate: {
        validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: '{VALUE} is not a valid 10 digit number!'
    } },
}
,{timestamps: true });
  
export default model('user',UserSchema);


