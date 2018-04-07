const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  g6Student: { 
    type: String,
    trim: true, 
    required: false, 
  },
  g7Student: {
    type: String,
    trim: true,
    require: false,
  },
  g8Student: {
    type: String,
    trim: true,
    required: false,
  },
  teacher: { 
    type: String,
    trim: true,
    required: true
  },
  characterCounts: {
    type: String, 
    required: false,
    trim: true
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
