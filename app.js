document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJson);
document.querySelector("#button3").addEventListener("click", getExternal);

//  Get Local text data (use Arrow function)
function getText() {
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

//  Get local json data
function getJson() {
  fetch("posts.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function (post) {
        output += `
          <li>title: ${post.title}</li> 
      `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

//  Get from external API
function getExternal() {
  // Get all users from Github
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function (user) {
        output += `
          <li>${user.login}</li> 
      `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      document.getElementById("output").innerHTML = ` Something went wrong ...`;
    });
}
