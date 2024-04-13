import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return response.status(401).json({ msg: "Token is missing" });
  }
  jwt.verify(
    token,
    "e027198548f5bdf1ccc7ce8e8fbdbb1fefef2a6a05fc55d87396b8cde0d340b21e856d851ee82851667f2111f53b857ff5fc17fafed0bf50355de5e54c1f499b",
    (error, user) => {
      if (error) {
        return response.status(403).json({ msg: "Invalid Token" });
      }

      request.user = user;
      next();
    }
  );
};
