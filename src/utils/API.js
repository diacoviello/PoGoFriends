import axios from "axios";

export default {
  // Retrieves saved friends in users database
  getFriend: function (query) {
    console.log(query);
    return axios.get("/api/friends");
  },

  // Deletes the saved friend with the given id
  deleteFriend: function (id) {
    return axios.delete("/api/friends/" + id);
  },

  // Saves a friend to the database
  saveFriend: function (friendData) {
    console.log(friendData);
    return axios.post("/api/friends", friendData);
  },

  // Update friend info
  updateFriend: function (friendData) {
    console.log(friendData);
    return axios.put("/api/friends", friendData);
  },

  signup: function (signupData) {
    console.log(signupData);
    return axios.post("/api/signup", signupData);
  },
  login: function (loginData) {
    console.log(loginData);
    return axios.post("/api/login", loginData);
  },
  isLoggedIn: function (loginData) {
    console.log(loginData);
    return axios.get("/api/login", loginData);
  },
  logout: function () {
    console.log();
    return axios.post("/api/logout");
  },
};
