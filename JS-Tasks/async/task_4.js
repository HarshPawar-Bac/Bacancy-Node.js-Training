function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve("Harsh");
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Posts fetched for ${user}`);
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

async function getData() {
  const user = await fetchUser(); // waits here
  const posts = await fetchPosts(user); // runs AFTER fetchUser

  console.log("Final Result:", posts);
}

getData();
