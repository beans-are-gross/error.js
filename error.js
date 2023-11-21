window.addEventListener("error", (ErrorEvent) => {
  const errorJs = document.getElementById("error-js");

  errorJs.innerHTML =
    '<div id="error-container"> <div id="error"> <img src="error.svg" /> <h1>Error</h1> <p>Your code has crashed.</p> <div id="error-info"> <h2>Error Info:</h2> <h3>Message:</h3> <p>' +
    ErrorEvent.message +
    "</p> <h3>Location:</h3> <p>" +
    ErrorEvent.filename +
    "</p> <h3>Line #:</h3> <p>" +
    ErrorEvent.lineno +
    "</p> <h3>Col #:</h3> <p>" +
    ErrorEvent.colno +
    "</p> <h3>Object</h3> <p>" +
    ErrorEvent.error +
    "</p> </div> </div> </div>";
});
