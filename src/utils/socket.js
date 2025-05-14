// frontend/utils/socket.js
import { io } from 'socket.io-client';
// frontend/utils/socket.js
const socket = io('https://wedbricksbackend-production.up.railway.app', {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
  });

export default socket;
