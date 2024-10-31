import axios from "axios";
import { Task } from "../types/Task";

const BASE_URL = "https://reactexambackend.onrender.com";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${BASE_URL}/missions/${API_KEY}`);
  return response.data;
};

export const addTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await axios.post(`${BASE_URL}/missions/${API_KEY}`, task);
    return response.data;
  };
  
  export const deleteTask = async (id: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/missions/${API_KEY}/${id}`);
  };