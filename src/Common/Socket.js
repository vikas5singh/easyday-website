import React, { useState, useEffect } from "react";
import SocketIo from "socket.io-client";
import { toast } from "react-toastify";

let API_URL = "http://192.168.1.45:5004";
const useSocket = () => {
  const [socket, setSocket] = useState({});

  useEffect(() => {
    const io = connectSocket({ customerId: localStorage.getItem("userId") });
    return () => io.close();
  }, []);

  const connectSocket = (data) => {
    const io = SocketIo(API_URL);
    try {
      io.emit("customersocket", data, (response) => {
        const { success, customerId } = response;
        setSocket({
          io: io,
          success,
        });
      });
    } catch (error) {
      setSocket({
        io: null,
        success: false,
      });
    }

    return io;
  };

  return [socket, connectSocket];
};

export default useSocket;
