import React from 'react';
import {
  Card, Form, Button
} from 'react-bootstrap'
import './Login.css';

interface LoginProps {
}

interface LoginState {
  email: string
  password: string
  remember: boolean
}

class LoginPage extends React.Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false,
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [e.target.name]: e.currentTarget.checked
    })
  }

  buttonSubmitClick(e: React.SyntheticEvent) {
  }

  validateEmail() {
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <>
        <h1> Login </h1>
        <Card className="form-login">
          <Card.Body>
            <Form>
              <Form.Group controlId="email">
                <Form.Label> Email </Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-danger">
                  error here
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-danger">
                  error here
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="remember">
                <Form.Check
                  type="checkbox"
                  checked={this.state.remember}
                  onChange={this.handleCheck}
                  label="remember me?"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default LoginPage;
