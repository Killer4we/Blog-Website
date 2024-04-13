import User from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Token from "../model/token.js";

dotenv.config();

export const signupUser = async (request, response) => {
  try {
    // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };
    const newUser = new User(user);
    await newUser.save();
    return response.status(200).json({ msg: "signup-successfull" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while signing up" });
  }
};

export const loginUser = async (request, response) => {
  let user = await User.findOne({ username: request.body.username });
  if (!user) {
    return response.status(400).json({ msg: "Username does not match" });
  }
  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        user.toJSON(),
        "e027198548f5bdf1ccc7ce8e8fbdbb1fefef2a6a05fc55d87396b8cde0d340b21e856d851ee82851667f2111f53b857ff5fc17fafed0bf50355de5e54c1f499b",
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        "7a78927b3d1c4b0151d8c6bf67ba7f3933d29ce79679390483ec23f816d0c08cb66e81ca2a4191f60aba9382a3e0bad6727ecf4d6d7a9aa95a760dda59e6c17f"
      );

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return response.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      return response.status(400).json({ msg: "Password does not match" });
    }
  } catch (error) {
    return response.status(500).json({ msg: "Error while Loging" });
  }
};
