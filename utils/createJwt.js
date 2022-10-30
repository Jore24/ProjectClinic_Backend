import jwt from "jsonwebtoken";

const tokenSign = async (user) => {
    return jwt.sign(
      {
        _id: user._id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
  };
  
  
export { tokenSign};