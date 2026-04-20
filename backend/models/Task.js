import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,

  status: {
    type: String,
    default: "Pending",
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Task", taskSchema);