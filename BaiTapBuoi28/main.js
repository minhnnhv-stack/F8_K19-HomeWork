const postReq = async (username, password) => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      return;
    }
    return (data = await response.json());
  } catch (err) {
    console.log(err);
  }
};

const handelLogin = async () => {
  const loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Input Check - User:", username, "| Pass:", password);
    const res = await postReq(username, password);
    const { accessToken, refreshToken } = res;
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    window.location.href = "http://127.0.0.1:5500/BaiTapBuoi28/profile.html";
  });
};
handelLogin();
