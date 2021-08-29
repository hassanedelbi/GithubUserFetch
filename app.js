// Search Input
const github = new Github();

const ui = new UI();
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== "") {
    // http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert user not found
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
