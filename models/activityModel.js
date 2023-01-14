const mongoose = require('mongoose')

const activitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    description: {
      type: String,
      required: [true, 'Please add an email'],
    },
    duration: {
      type: String,
      required: [true, 'Please add a duration'],
    },
    activitytype: {
        type: String,
        required: [true, 'Please add a duration'],
    },
    date: {
        type: String,
        required: [true, 'Please add a date'],
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Activity', activitySchema)