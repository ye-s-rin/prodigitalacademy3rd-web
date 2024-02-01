const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    thumbnail: {
      type: String,
      unique: true,
    },
    story: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model("Movie", MovieSchema);

const ReviewSchema = new mongoose.Schema({
  writer: {
    type: String,
    required: true,
  },
  movie: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Movie",
  },
  title: {
    type: String,
    required: true,
    validate: function (val) {
      return val.trim() !== "" && val.length > 1;
    },
  },
  content: {
    type: String,
    default: "",
  },
});
const Review = mongoose.model("Review", ReviewSchema);
