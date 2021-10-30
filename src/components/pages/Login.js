import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "../common/Input";
import PageLayout from "../common/PageLayout";
import PasswordInput from "../common/PasswordInput";
import { Button } from "../common/Button";
import { Spinner } from "../common/Spinner";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .txt {
    text-align: center;
    margin: 10px 0;
  }

  &>${Button}:first-of-type{
    margin-top: 40px;
  }

  &>${Input} {
    margin-top: 20px;
  }
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const HandleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  let timeout;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => setLoading(false), 2000);
  };
  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <span>
              Login if you have an account
            </span>
            <Input
              name="username"
              placeholder="Username"
              value={formFields.username}
              onChange={HandleChange}
            />
            <PasswordInput
              name="password"
              type="password"
              placeholder="Password"
              value={formFields.password}
              onChange={HandleChange}
            />
          </>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="txt">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
