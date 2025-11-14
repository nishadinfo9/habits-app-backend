import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

// const generateAccessAndRefreshToken = async (userId) => {
//   const user = await User.findById(userId);
//   const accessToken = await user.generateAccessToken();
//   const refreshToken = await user.generateRefreshToken();
//   user.refreshToken = refreshToken;

//   return { accessToken, refreshToken };
// };

export {};
