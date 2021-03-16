import React from 'react';
import { Card, Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import './Home.css'
import avatar from './avatar.jpeg'
import { Redirect } from 'react-router';

interface HomeProps {
  setToast: any
}
interface HomeState {
  email: string
  file: File | null
  fileUrl: string
}
class HomePage extends React.Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: localStorage.getItem('email') ?? '',
      file: null,
      fileUrl: ''
    }
    this.changeAvatar = this.changeAvatar.bind(this)
    this.logout = this.logout.bind(this)
  }

  changeAvatar(e: FileList) {
    let reader = new FileReader()
    const file = e[0]
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      this.setState({
        ...this.state,
        file: file,
        fileUrl: reader.result as string
      })
    }
  }

  logout() {
    this.setState({
      ...this.state,
      email: ''
    })
    this.props.setToast({
      type: 'success',
      message: 'Logout Successfully!'
    })
    localStorage.setItem('email', '')
  }
  render() {
    if (!localStorage.getItem('email')) {
      return (
        <Redirect to="/login"></Redirect>
      )
    }
    return (
      <>
        <h1> Home </h1>
        <Card className="home">
          <Card.Body>
            <Container>
              <Row>
                <Col md="12">
                  <Image
                    style={{overflow: "hidden", maxHeight: "100px"}}
                    src={this.state.fileUrl ? this.state.fileUrl : avatar} 
                    roundedCircle 
                  />
                </Col>
                <Col md="12">
                  <Form>
                    <Form.Group className="avatar-select">
                      <input
                        name="avatar"
                        type="file"
                        onChange={(e) => this.changeAvatar(e.target.files as FileList)}
                       />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row> 
                <Col md="12">
                  {localStorage.getItem('email')}
                </Col>
              </Row>
              <Row> 
                <Col md="12">
                  <Button size="sm" onClick={(e) => this.logout()}>
                    Logout
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HomePage;
