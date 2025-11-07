import * as userService from '../services/userService.js';

export const listUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

export const addUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  res.status(201).json(newUser);
};