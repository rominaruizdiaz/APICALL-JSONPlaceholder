const uri = "https://jsonplaceholder.typicode.com/users";

let dataTable = document.getElementById("user-data");
let userData = [];

async function main() {
  userData = await getData();
  createTable(userData);
}

async function getData() {
  try {
    const result = await fetch(uri);
    const data = await result.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log("UPSSS something wrong!!!");
  }
}

function createTable(userData) {
  for (let user of userData) {
    dataTable.innerHTML += `
    <tr>
        <td class="bolder-font">${user.id}</td>
        <td>${user.name}</td>
        <td>${user.address.city}</td>
    </tr>
    `;
  }
}

function getPhoneNumber() {
  let userId = parseInt(document.getElementById("user-id").value);
  let phoneNumber = document.getElementById("phone-number");

  let foundUser = userData.find((user) => user.id === userId);

  if (foundUser) {
    phoneNumber.innerHTML = `<h2>${foundUser.name}</h2> <h3>${foundUser.phone}</h3>`;
  } else {
    phoneNumber.innerHTML = `<h2>USUARIO NO ENCONTRADO</h2>`;
  }
}

main();
