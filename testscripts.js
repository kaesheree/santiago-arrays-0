function consumeCPU() {
    setInterval(() => {
      // This function will be repeatedly called, consuming CPU resources
      let result = 0;
      for (let i = 0; i < 1000000; i++) {
        result += Math.random();
      }
    }, 100); // Adjust the interval as needed
  }
  
  // Call the function to start consuming CPU
  consumeCPU();
  