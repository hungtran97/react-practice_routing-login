import React from 'react';
import {
  Card, Form, Button
} from 'react-bootstrap'
import { Redirect } from 'react-router';
import './Login.css';

interface LoginProps {
  setToast: any
}

interface LoginState {
  email: string
  password: string
  remember: boolean
  validator: {
    email: string
    password: string
  }
  isLoggedIn: boolean
}

class LoginPage extends React.Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false,
      validator: {
        email: '',
        password: '',
      },
      isLoggedIn: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.validated = this.validated.bind(this)
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "email") {
      let message = ''
      if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value))) {
        message = 'Email invalid format!'
      }
      this.setState({
        ...this.state,
        email: e.target.value,
        validator: {
          ...this.state.validator,
          email: message
        }
      })
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      })
    }
  }

  handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [e.target.name]: e.currentTarget.checked
    })
  }

  onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    if (this.validated()) {
      this.props.setToast({
        type: 'success',
        message: 'Login Successfully!'
      })
      this.setState({
        ...this.state,
        isLoggedIn: true
      })
      localStorage.setItem('email', this.state.email)
    } else {
      this.props.setToast({
        type: 'danger',
        message: 'Login Error!'
      })
    }

  }

  validated(): boolean {
    if (!(this.state.email === "admin@ows.vn" && this.state.password === "ows")) {
      this.setState({
        ...this.state,
        validator: {
          ...this.state.validator,
          password: 'Email or Password invalid!'
        }
      })
      console.log(this.state)
      return false
    } else {
      this.setState({
        ...this.state,
        validator: {
          ...this.state.validator,
          password: ''
        }
      })
      console.log(this.state)
      return true
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Redirect to='/home'></Redirect>
      )
    }
    return (
      <>
        <h1> Login </h1>
        <Card className="form-login">
          <Card.Body>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="email">
                <Form.Label> Email </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="admin@ows.vn"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-danger">
                  {this.state.validator.email}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="ows"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-danger">
                  {this.state.validator.password}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="remember">
                <Form.Check
                  type="checkbox"
                  name="remember"
                  checked={this.state.remember}
                  onChange={this.handleCheck}
                  label="remember me?"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default LoginPage;
