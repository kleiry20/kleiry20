function openProject(key) {
  switch (key) {
    case "crypto":
      window.open("https://intract-app.vercel.app/", "_blank");
      break;
    case "event":
      window.open("https://astrix-project-ten.vercel.app/", "_blank");
      break;
    case "weather":
      window.open("https://weather-app-seven-ecru-91.vercel.app/", "_blank");
      break;
    case "apparel":
      window.open("https://bewakoof-iat3.vercel.app/", "_blank");
      break;
    case "miscellaneous":
      window.open("https://github.com/kleiry20", "_blank");
      break;
    default:
      console.log("error routing the project");
  }
}
