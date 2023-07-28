import axios from "axios";

const USER_API_BASE_URL = "http://localhost:2018/api/v1/user";

const AUTH_API_BASE_URL = "http://localhost:2018/auth";

class UserService {
  
  //Public Route
  saveUser(user) {
    return axios.post(AUTH_API_BASE_URL + "/register", user);
  }

  //Public Route
  loginUserWithEmailAndPassword(user) {
    return axios.post(AUTH_API_BASE_URL + "/login", user);
  }

  getUsers() { 
    return axios.get("/get");
  }

  getUserByEmail(email, token) {
    return axios.get(USER_API_BASE_URL + "/get/"  + email, {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    });
  }

  deleteUser(id, user) {
    return axios.delete(USER_API_BASE_URL + "del/" + id, user);
  }

  updateUser(id, user) {
    return axios.put(USER_API_BASE_URL + "edit/" + id, user);
  }

addFeedback(token, details){
    return axios.post("http://localhost:2018/api/v1/user/feedback/add", details, {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    })
  }
}

export default new UserService();
