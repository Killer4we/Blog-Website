import { Box, TextField, Button, styled, Typography } from "@mui/material";
import logoPic from "../../images/logo.png";
import { useState, useContext } from "react";
import { API } from "../../service/api";
import { set } from "mongoose";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 500px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
`;

const Image = styled("img")({
  width: 150,
  margin: "auto",
  display: "flex",
  padding: "20px 0",
});

const Buttons = styled(Box)`
  padding: 20px 25px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 17px;
`;

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};
const loginInitialValues = {
  username: "",
  password: "",
};

const LoginButton = styled(Button)`
  height: 45px;
  background: #fb641b;
  color: #fff;
  border-radius: 15px;
`;

const SignupButton = styled(Button)`
  height: 45px;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`;

const Login = ({ isUserAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState("");
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      setError("Something went wrong");
    }
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");

      sessionStorage.setItem(
        "accessToken",
        "Bearer ${response.data.accessToken}"
      );
      sessionStorage.setItem(
        "refreshToken",
        "Bearer ${response.data.refreshToken}"
      );

      setAccount({
        username: response.data.username,
        name: response.data.name,
      });
      isUserAuthenticated(true);

      navigate("/");
    } else {
      setError("Something went wrong");
    }
  };

  return (
    <Component>
      <Image src={logoPic} alt="Logo" />
      {account === "login" ? (
        <Buttons>
          <TextField
            variant="filled"
            value={login.username}
            onChange={(e) => onValueChange(e)}
            name="username"
            label="Enter Username"
          />
          <TextField
            variant="filled"
            value={login.password}
            onChange={(e) => onValueChange(e)}
            name="password"
            label="Enter Password"
          />
          {error && <Error>{error}</Error>}
          <LoginButton variant="contained" onClick={() => loginUser()}>
            Login
          </LoginButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <SignupButton variant="outlined" onClick={() => toggleSignup()}>
            Create a new account
          </SignupButton>
        </Buttons>
      ) : (
        <Buttons>
          <TextField
            variant="filled"
            value={signup.name}
            onChange={(e) => onInputChange(e)}
            name="name"
            label="Enter Name"
          />
          <TextField
            variant="filled"
            value={signup.username}
            onChange={(e) => onInputChange(e)}
            name="username"
            label="Enter Username"
          />
          <TextField
            variant="filled"
            value={signup.password}
            onChange={(e) => onInputChange(e)}
            name="password"
            label="Enter Password"
          />
          {error && <Error>{error}</Error>}
          <SignupButton onClick={() => signupUser()} variant="outlined">
            Signup
          </SignupButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <LoginButton variant="contained" onClick={() => toggleSignup()}>
            Already have an account
          </LoginButton>
        </Buttons>
      )}
    </Component>
  );
};

export default Login;
