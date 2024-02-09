function lockOrientation() {
    if (screen.orientation.lock) {
      // Lock the screen orientation
      screen.orientation.lock("portrait-primary").then(function success() {
        console.log("Orientation locked");
      }, function error(err) {
        console.error("Unable to lock orientation: " + err.message);
      });
    }
  }

  // Call the function to lock the orientation when the page loads
  lockOrientation();