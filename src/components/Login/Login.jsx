import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (login === "AliOdiljonov" && password === "ali-muhandis") {
      navigate("/home")
    } else {
      alert("Login yoki parol noto‘g‘ri")
    }
  }
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#2B3844" : "#d6d6d6ff"
  }, [isDarkMode])
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <>
      <p
        className="p"
        onClick={toggleDarkMode}
        style={{
          backgroundColor: isDarkMode ? "#2B3844" : "#ffffff",
          color: isDarkMode ? "white" : "black",
          display: isDarkMode ? "block" : "none",
        }}>
        <img src="img/light.svg" alt="" /> Dark Mode
      </p>
      <p
        className="p"
        onClick={toggleDarkMode}
        style={{ display: isDarkMode ? "none" : "block" ,background:isDarkMode ? "#2B3844" : "#d6d6d6ff"}}>
        <img src="img/moon.svg" alt="" />Light Mode
      </p>
        <h1 style={{color:isDarkMode ? "white" : "black"}} className="rest-countries">
          Rest Countries <img src="img/uz.png" alt="" />
        </h1>
      <div
        className="login-container"
        style={{ backgroundColor: isDarkMode ? "#202C36" : "#ffffff" }}>
        <div
          className="login-box"
          style={{ background: isDarkMode ? "#2B3844" : "#d6d6d6ff" }}>
          <h2 style={{ color: isDarkMode ? "white" : "black" }}>Login</h2>
            <p style={{textAlign:"center", color:"green"}}>Login: AliOdiljonov</p>
            <p style={{textAlign:"center", color: "red"}}>Password: ali-muhandis</p>
          <form onSubmit={handleLogin}>
            <label
              style={{
                color: isDarkMode ? "white" : "black",
                marginBottom: "20px",
              }}>
              Login
            </label>
            <input
              type="text"
              style={{
                background: isDarkMode ? "#202C36" : "white",
                color: isDarkMode ? "white" : "black",
              }}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Login"/>
            <label
              style={{
                color: isDarkMode ? "white" : "black",
                marginBottom: "20px",
              }}>
              Password
            </label>
            <input
              type="password"
              style={{
                background: isDarkMode ? "#202C36" : "white ",
                color: isDarkMode ? "white" : "black",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"/>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
