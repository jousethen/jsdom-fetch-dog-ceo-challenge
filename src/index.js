document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const breedContainer = document.getElementById("dog-breeds");
  const imgContainer = document.getElementById("dog-image-container");
  const dropdown = document.getElementById("breed-dropdown");

  fetch(imgUrl).then(function (resp) {
    return resp.json();
  }).then(function (json) {

    for (const img of json.message) {
      let imgElement = document.createElement("img");
      imgElement.src = img;
      imgContainer.appendChild(imgElement);
    }

  });

  fetch(breedUrl).then(function (resp) {
    return resp.json();
  }).then(function (json) {

    for (const breed in json.message) {
      let breedName = document.createElement("li");
      breedName.innerHTML = breed;

      if (breed[0] != dropdown.value) {
        breedName.style.display = "none";
      }
      breedName.addEventListener("click", function (e) {
        breedName.style.color = "red";
      });
      breedContainer.appendChild(breedName);
    }

  });
  console.log(dropdown.value);

  dropdown.addEventListener("change", function (c) {
    for (const listObj of document.getElementsByTagName("li")) {
      listObj.style.display = "list-item";

      if (listObj.innerHTML[0] != dropdown.value) {
        listObj.style.display = "none";
      }
    }
  });



});