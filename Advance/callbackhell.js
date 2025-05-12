setTimeout(() => {
  console.log("Step 1: Fetch user data");
  setTimeout(() => {
    console.log("Step 2: Fetch user posts");
    setTimeout(() => {
      console.log("Step 3: Fetch post comments");
      setTimeout(() => {
        console.log("Step 4: Process all data");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
