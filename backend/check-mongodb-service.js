const net = require('net');

const checkPort = (host, port) => {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timeout = 2000; // 2 seconds timeout

    socket.setTimeout(timeout);
    socket.connect(port, host, () => {
      socket.destroy();
      resolve(true);
    });

    socket.on('error', () => {
      socket.destroy();
      resolve(false);
    });

    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
  });
};

async function checkMongoDB() {
  console.log('Checking if MongoDB is running on localhost:27017...');
  
  const isRunning = await checkPort('localhost', 27017);
  
  if (isRunning) {
    console.log('✅ MongoDB is running on port 27017');
  } else {
    console.log('❌ MongoDB is NOT running on port 27017');
  }
  
  return isRunning;
}

checkMongoDB();
