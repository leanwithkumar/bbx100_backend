import Users from "../models/users.model.js";

export const countuser = async (req, res) => {
  try {
    const count = await Users.countDocuments(); 
    res.status(200).json({ totalUsers: count });
  } catch (error) {
    res.status(500).json({ message: "Error counting users", error: error.message });
  }
};
