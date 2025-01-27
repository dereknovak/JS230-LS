function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

fetchUserData()
  .catch((data) => console.log(data.error))
  .finally(() => console.log('Fetching complete'));