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
    let ul = document.createElement("ul");

    repos.forEach((repo) => {
      let li = document.createElement("li");
      li.textContent = `${repo.name} - ${repo.description}`;
      ul.append(li);
    });

    $("#results").html(ul);
  });
});
