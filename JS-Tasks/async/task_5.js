function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Users fetched");
      resolve(["User1", "User2"]);
    }, 2000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["Post1", "Post2"]);
    }, 2000);
  });
}

async function getData() {
  const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);

  console.log("Final Result:", users, posts);
}

getData();
