const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "이메일을 입력하여 주세요."],
        unique: true,
        lowercase: true,
        validate: [isEmail, "올바른 이메일 형식이 아닙니다."],
    },
    password: {
        type: String,
        required: [true, "비밀번호가 입력되어야 합니다."],
    },
    nickname: {
        type: String,
    }
});

userSchema.statics.signUp = async function (email, password, nickname) 
{
    const salt = await bcrypt.genSalt();
    console.log(salt);
    try {
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await this.create({ email, password: hashedPassword, nickname });
    return {
        _id: user._id,
        email: user.email,
        nickname: user.nickname,
    };
    } catch (err) {
        throw err;
    }
};

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user.visibleUser;
        }
        throw Error("incorrect password");
    }
    throw Error("incorrect email");
};

const visibleUser = userSchema.virtual("visibleUser");
visibleUser.get(function (value, virtual, doc) {
    return {
        _id: doc._id,
        email: doc.email,
        nickname: doc.nickname,
    };
});
//"User" 모델을 생성하면 기본적으로 "users"라는 이름의 컬렉션이 MongoDB에 생성
//"User" 모델을 생성하면서 컬렉션의 이름을 "my_users"로 지정하고 싶다면
//const User = mongoose.model("User", userSchema, "my_users");
const User = mongoose.model("User", userSchema);

module.exports = User;
