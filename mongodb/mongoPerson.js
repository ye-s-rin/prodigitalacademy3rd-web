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
const personSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  age: Number,
});
const Person = mongoose.model("Person", personSchema);

Person.insertMany([
  {
    name: {
      first: "윤수",
      last: "신",
    },
    age: 16,
  },
  {
    name: {
      first: "민수",
      last: "남궁",
    },
    age: 20,
  },
]).then((data) => {
  console.log(data);
});

Person.find({
  age: { $gt: 17, $lt: 66 },
})
  .limit(10)
  .sort({ age: -1 })
  .select({ name: 1, age: 1 })
  .then((data) => {
    console.log(data);
  });
