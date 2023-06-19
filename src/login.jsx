import React, { useState } from "react";
import styles from "./components/login.module.css";
import { TextField, Button, Stack } from "@mui/material";

function Login() {
  const [inputs, setInputs] = useState({ user: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (inputs.user === "admin" && inputs.password === "admin") {
      const admins = { user: inputs.user, password: inputs.password };
      setInputs({ user: "", password: "" });
      sessionStorage.setItem("admins", JSON.stringify(admins));
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1000);
    } else {
      setInputs({ user: "", password: "" });
      setSubmitted(false);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.formSession}>
        <h1>Iniciar Sesion</h1>
        <form noValidate>
          <Stack spacing={2}>
            <TextField
              autoComplete="off"
              className={styles.inputs}
              label="Usuario"
              type="email"
              name="user"
              required
              value={inputs.user}
              onChange={handleChange}
            />
            <TextField
              autoComplete="off"
              className={styles.inputs}
              label="Password"
              type="password"
              name="password"
              required
              value={inputs.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color={submitted ? "success" : "error"}
              onClick={onSubmit}
            >
              Login
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default Login;
