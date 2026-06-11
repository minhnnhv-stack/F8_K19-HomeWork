const getReq = async () => {
  try {
    const accessToken = localStorage.getItem("access_token");
    console.log("Access Token:", accessToken);
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    if (response.status === 401 || response.status === 500) {
      console.log("Token Expired");
      const isRefreshed = await refeshTokenReq();
      if (isRefreshed) {
        return getReq();
      } else {
        localStorage.clear();
        window.location.href = "http://127.0.0.1:5500/BaiTapBuoi28/login.html";
        return;
      }
    }
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      return;
    }

    // 6. Trả về dữ liệu thành công
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
const refeshTokenReq = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: refreshToken,
        expiresInMins: 30,
      }),
    });
    if (!response.ok) {
      consloe.log("Refresh Token Error");
      return false;
    }

    const data = await response.json();
    localStorage.setItem("refresh_token", data.refreshToken);
    localStorage.setItem("access_token", data.accessToken);
    return true;
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
