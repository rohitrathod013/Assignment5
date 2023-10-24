fetch("https://randomuser.me/api/?results=5")
  .then((data) => {
    return data.json(); // Convert the response to an object
  })
  .then((objectData) => {
    const results = objectData.results;

    let tableData = "";
    results.forEach((user) => {
      // Here we iterate through each user object in the results array.
      //For each user, it extracts the first name and city.
      const firstName = user.name.first;
      const city = user.location.city;

      tableData += `<tr>
        <td>${firstName}</td>
        <td>${city}</td>
      </tr>`;
    });

    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });
