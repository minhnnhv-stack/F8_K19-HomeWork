const getReq = async () => {
  try {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      return (res = await response.json());
      console.log(res);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const handelProfile = async () => {
  const data = await getReq();

  const userInfo = document.getElementById("userInfo");

  const userId = document.getElementById("userId");
  userId.innerText = data.id;

  const username = document.getElementById("username");
  username.innerText = data.username;

  const firstName = document.getElementById("firstName");
  firstName.innerText = data.firstName;

  const lastName = document.getElementById("lastName");
  lastName.innerText = data.lastName;

  const email = document.getElementById("email");
  email.innerText = data.email;

  const gender = document.getElementById("gender");
  gender.innerText = data.gender;

  const userImage = document.getElementById("userImage");
  userImage.src = data.image;
};
handelProfile();
