import axios from 'axios';
import { Platform } from 'react-native';

const api = axios.create({
  baseURL: `http://${
    Platform.OS === 'ios' ? 'localhost' : '192.168.0.103'
  }:3333`,
});

export default api;
