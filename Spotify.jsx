export const authEndpoint  ="https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:5000/";
const clientId ="5c6a39e1ba444285a2a90221d35ac070"


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  
  
  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;