// frontend/utils/socket.js
import { io } from 'socket.io-client';

const socket = io('https://wedbricksbackend-production.up.railway.app', {
  transports: ['websocket'], // optional but recommended
});

export default socket;
