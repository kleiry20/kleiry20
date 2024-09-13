function openProject(key) {
  //   if (key == "crypto") {
  //     window.open("https://intract-app.vercel.app/", "_blank");
  //   }
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
    default:
      console.log("error routing the project");
  }
}
