import React, { useState } from "react";
import { Col, Row, Input, Button, Checkbox, Alert } from "antd";
import axios from "axios";

const Main = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios({
        type: "post",
        url: "https://reqres.in/api/login",
        data: {
          email: email,
          password: password,
        },
      });
      <Alert message={"Hello this is suraj"} type="success" closable />;
      alert("Success! open console to see response");
      console.log(res.data);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="container-left">
        <Row gutter={[0, 20]} className="container-login">
          <Col>
            <h2 className="heading1">Welcome Back</h2>
            <p className="subtitle1">Subtitle text goes here</p>
          </Col>

          <Row>
            <Input placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)}></Input>
          </Row>
          <Row>
            <Input placeholder="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></Input>
          </Row>
          <Row>
            <Button loading={isLoading} type="primary" onClick={(e) => handleSubmit(e)} block className="button-primary">
              Login
            </Button>
          </Row>
          <Row>
            <Col span={12}>
              <Checkbox onChange={() => setChecked(!checked)}>Remember</Checkbox>
            </Col>
            <Col span={12}>
              <p style={{ textAlign: "right" }}>Forget Password?</p>
            </Col>
          </Row>
        </Row>
      </div>
      <div className="container-right"></div>
    </div>
  );
};

export default Main;
