import mongoose from "mongoose";

const MONGO_HOST =
  "mongodb+srv://admin:admin@cluster0.uei2mzt.mongodb.net/movie";
mongoose
  .connect(MONGO_HOST, {
    retryWrites: true,
    w: "majority",
  })
  .then((resp) => {
    console.log(resp);
    console.log("DB 연결 성공");
  });
