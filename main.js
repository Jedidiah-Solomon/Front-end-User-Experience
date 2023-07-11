fetch('config.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Hey! there is an error fetching the configuration file');
    }
    return response.json();
  })
  .then(data => {
    // Access the configuration values
    const appName = data.appName;
    const version = data.version;
    const database = data.database;
    const apiKeys = data.apiKeys;
    const debugMode = data.debugMode;
    const password = data.database.password;

    // Use the configuration values in your code
    console.log("Application Name:", appName);
    console.log("Version:", version);
    console.log("Database Configuration:", database);
    console.log("API Keys:", apiKeys);
    console.log("Debug Mode:", debugMode);
    console.log("Password for user:", password);

    // Update elements on the page with the configuration values
    document.querySelector("h1").innerText = appName;
  })
  .catch(error => {
    // Handle the error
    console.error("Error message: ", error);
    // Update the UI to display the error message
    document.querySelector("#error-message").innerText = "Failed to fetch the configuration file.";
  });
