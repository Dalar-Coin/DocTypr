const User = require('../models/user.model');

const getUsers = async (req, res) => { 
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        if(!user){
          return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
          return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const login = async (req, res) => {
  try {
      const { username, password } = req.body;
      const user = await User.findOne({ name: username, password: password });
      
      if (!user) {
          return res.status(401).json({ message: "Invalid username or password" });
      }
      res.status(200).json({ message: "Login successful", user });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login,
}