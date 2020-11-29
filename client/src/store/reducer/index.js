
export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
  server_port:process.env.SERVER_PORT
 
  // client_id: "f897e1716a41568a5332",
  // redirect_uri:'http://localhost:3000/login',
  // client_secret: "ab7a0d19ca981ab78bdff68471a4d244d7341979",
  // proxy_url: "http://localhost:3100/authenticate",
  // SERVER_PORT:"3100"
};

console.log(initialState)

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      console.log(action.payload.isLoggedIn)
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      };
    }
    case "LOGOUT": {
      localStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default:
      return state;
  }
};