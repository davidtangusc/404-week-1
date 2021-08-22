$("#members-link").on("click", function () {
  $("#results").html("Loading...");

  let promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/jquery/members",
  });

  promise.then((members) => {
    let html = "";

    // vulnerable to Cross-site Scripting (XSS) attacks
    members.forEach((member) => {
      html += `
        <img
          src="${member.avatar_url}"
          alt="image of ${member.login}"
          width="150">
      `;
    });

    $("#results").html(html);
  });
});

$("#repos-link").on("click", function () {
  $("#results").html("Loading...");

  let promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/jquery/repos",
  });

  promise.then((repos) => {
    let html = "<ul>";

    // vulnerable to Cross-site Scripting (XSS) attacks
    repos.forEach((repo) => {
      html += `<li>
        ${repo.name} - ${repo.description}
      </li>`;
    });

    html += "</ul>";

    $("#results").html(html);
  });
});
