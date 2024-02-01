import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://user:admin1234@cluster0.s5hhvlz.mongodb.net/movie";

mongoose
  .connect(MONGO_URL, {
    retryWrites: true,
    w: "majority",
  })
  .then((resp) => {
    // console.log(resp);
    console.log("DB 연결 성공");
  })
  .catch((err) => {});

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

// Movie.create({
//     title: "영화1",
//     director: {
//         first: "윤수",
//         last: "신"
//     },
//     startDate: "2018-08-19",
//     thumbnail: "https://naver.com/",
//     story: "비밀리에 제작된..",
//     tags: [2017, "액션", "한국"]
// }).then(data=>{
//     console.log(data);
// })

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

MovieSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "movie",
});

const Movie = mongoose.model("Movie", MovieSchema);

const Review = mongoose.model("Review", ReviewSchema);

Movie.find({})
  .populate("reviews")
  .then((movie) => {
    console.log(movie[0].reviews);
  });

// Review.find({}).populate('movie').then(review=>{
//     console.log(review);
// })

// Movie.find({}).then(data=>{
//     console.log(data);
// })

// Review.create({
//     writer: "신윤수",
//     movie: '65bb3183396b087a94ebaaa4',
//     title: "재미있어요.",
//     content: "아쉬운점은.. 재밌는 점은.."
// }).then(data=>{
//     console.log(data);
// })

// Movie.findOne({title:"영화1"}).then(data=>{
//     Review.create({
//         writer: "신윤수",
//         movie: data._id,
//         title: "두번째 리뷰",
//     }).then(result=>{
//         console.log(result);
//     })
// })

// mongoose.connection.close();
