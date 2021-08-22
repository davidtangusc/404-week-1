$("#members-link").on("click", function () {
  $("#results").html("Loading...");

  let promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/jquery/members",
  });

  promise.then((members) => {
    let fragment = document.createDocumentFragment();

    members.forEach((member) => {
      let img = document.createElement("img");
      img.src = member.avatar_url;
      img.width = 150;
      img.alt = `image of ${member.login}`;
      fragment.append(img);
    });

    $("#results").html(fragment);
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

    // less vulnerable to Cross-site Scripting (XSS) attacks
    repos.forEach((repo) => {
      html += `<li>
        ${repo.name} - ${repo.description}
      </li>`;
    });

    html += "</ul>";

    let sanitizedHtml = DOMPurify.sanitize(html);
    $("#results").html(sanitizedHtml);
  });
});
