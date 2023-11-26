window.addEventListener("error", (error) => {
  console.error("error.js: " + error.message);
  const errorJs = document.getElementById("error-js");

  errorJs.innerHTML =
    '<div id="error-container"> <div id="error"> <img src="https://raw.githubusercontent.com/beans-are-gross/error.js/main/error.svg" /> <h1>Error</h1> <p>A script has crashed.</p> <div id="error-info"> <h2>Error Info:</h2> <h3>Message:</h3> <p>' +
    error.message +
    "</p> <h3>Location:</h3> <p>" +
    error.filename +
    "</p> <h3>Line #:</h3> <p>" +
    error.lineno +
    "</p> <h3>Col #:</h3> <p>" +
    error.colno +
    "</p> <h3>Object</h3> <p>" +
    error.error +
    "</p> </div> </div> </div>";
});

console.info("error.js: Initialized successfully");