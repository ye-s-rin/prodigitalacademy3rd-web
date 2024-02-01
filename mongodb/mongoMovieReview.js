import mongoose from "mongoose";
const MONGO_HOST = process.env.MONGO_URL;
mongoose
  .connect(MONGO_HOST, {
    retryWrites: true,
    w: "majority",
  })
  .then((resp) => {
    console.log(resp);
    console.log("DB 연결 성공");
  });

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      first: String,
      last: String,
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
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
MovieSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "movie",
});

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

Movie.create({
  title: "영화1",
  director: { first: "윤수", last: "신" },
  startDate: "2017-01-18",
  thumbnail:
    "https://an2-img.amz.wtchn.net/image/v2/W-6OOBFuHj6lBaBEfctSjw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjV5YW5kaE5uaDFZbWx2WW5kbmJuWjVZM0J3SW4wLlVxRm83bHNuaHU3dzc5aXBIVlYtU2prUFQxY29JYWV2TUdMNDBLaVg5eTQ",
  story:
    "비밀리에 제작된 위조 지폐 동판을 탈취하려는 내부 조직에 의해 작전 중 아내와 동료들을 잃게 된 특수 정예부대...",
  tags: [2017, "액션", "한국"],
}).then((data) => {
  console.log(data);
});
Movie.find({ director: "영화1" });

Review.create({
  writer: "신윤수",
  movie: "65bb2f41ea19296492a8bc81",
  title: "재미있어요.",
  content: "아쉬운 점은...",
}).then((data) => {
  console.log(data);
});

Review.find({ writer: "신윤수" }).then((review) => {
  console.log(review);
});
Review.find({ writer: "신윤수" })
  .populate("movie")
  .then((review) => {
    console.log(review);
  });

Review.find({})
  .populate("movie")
  .then((movie) => {
    console.log(movie[0].reviews);
  });
