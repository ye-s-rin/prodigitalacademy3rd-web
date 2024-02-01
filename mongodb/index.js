import mongoose from "mongoose";
const MONGO_HOST = "mongodb+srv://admin:admin@cluster0.uei2mzt.mongodb.net/";
mongoose
  .connect(MONGO_HOST, {
    retryWrites: true,
    w: "majority",
  })
  .then((resp) => {
    console.log(resp);
    console.log("DB 연결 성공");
  });

const Cat = mongoose.model("Cat", {
  name: String,
});

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then((data) => {
  console.log("저장된 데이터");
  console.log(data);
});
