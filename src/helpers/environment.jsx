let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "kra-merica.herokuapp.com":
    APIURL = "https://kra-merica-portal-server.herokuapp.com";
}
export default APIURL;