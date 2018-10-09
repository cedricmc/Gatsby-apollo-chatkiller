import React, { Component } from 'react'
import { AUTH_TOKEN } from '../../../constants/constants'
import { graphql, compose } from 'react-apollo'
import { navigate } from "gatsby"; 
import gql from 'graphql-tag'
import SnackBarCustom from '../../nav/SnackBarCustom'
import Password from './Password'
import Card from '../../../reactLIB/Card'
import Button from '../../../reactLIB/Button'
import Input from '../../../reactLIB/Input'
import { withApollo } from 'react-apollo'
import ProgressBar from '../../../reactLIB/ProgressBar';

var validator = require('email-validator')

class Signup extends Component {
  state = {
    email: '',
    emailValidation: true,
    inputValidation2: true,
    password: '',
    name: '',
    isPasswordActiveStep: false,
    nameFile: '',
    activeStep: 0,
    maxStep: 3,
  }
  onChange2(statePasword){
    this.setState({
      password: statePasword.password,
      inputValidation2: statePasword.inputValidation2
    })
  }

  onChange1(e){
    this.setState({ email: e.target.value })
    if (this.validateEmail(e.target.value )) {
      this.setState({emailValidation: true})
    } else {
      this.setState({emailValidation: false})
    }
  }
  validateEmail(email) {
      return validator.validate(email)
  }
  calculateBuffer() {
    let data = ''
    if(this.state.activeStep === 0) {
      data = this.state.name
    }
    if(this.state.activeStep === 1) {
      data = this.state.email
    }
    if(this.state.activeStep === 2) {
      data = this.state.password
    }
    let maxValue = data.length/10 > 1 ? 1 : data.length/10
    return (this.state.activeStep + maxValue) * 100 / this.state.maxStep
  }
  handleNext = () => {
    if(this.state.name) {
      if(this.state.activeStep === 0 ) {
        this.setState({
          activeStep: this.state.activeStep + 1,
        }, () => {
          //  this.input1.focus()
        })
      }
      if(this.state.activeStep === 1 ) {
        if(this.state.emailValidation ) {
          this.setState({
            activeStep: this.state.activeStep + 1,
          }, () => {
            // this.input2.focus()
            this.setState({isPasswordActiveStep:true})
          })
        }
      }
      if(this.state.activeStep === 2 ) {
        if(this.state.inputValidation2 ) {
          this.setState({
            activeStep: this.state.activeStep + 1,
          }, () => {
            this._confirm()
          })
        }
      }
    }
  };

  handleKey = (data) => {
    if(data.charCode === 13) { //keyPress enter
      this.handleNext()
    }
  }

  render() {
    return (
      <div className='paperOut'>
        <Card className='paperIn' s={12} style={{padding:0}}>
        <h4 className='mv3'>
          Sign Up
        </h4>
        <div className='flex flex-column'>

        <ProgressBar variant='buffer'
          progress={this.state.activeStep * 100 / this.state.maxStep }
          // valueBuffer={this.calculateBuffer()}
             />
          <br/>
            <div className='tac'>
              <div className={'wrapperAnimate ' + (this.state.activeStep === 0 ? 'focusField' : 'notFocusField')}>
                <Input
                  id='name'
                  label="Your name"
                  value={this.state.name}
                  inputRef={node => this.input0 = node}
                  onChange={e => this.setState({ name: e.target.value })}
                  type='text'
                  onKeyPress={this.handleKey}
                  s={12}
                />
                {this.state.activeStep === 0 && (
                    <Button 
                    onClick={this.handleNext}
                    type="material-icons"
                    icon='navigate_next'
                    floating
                  >
                  </Button>
                )}
            </div>
            <br/>
            {this.state.activeStep >= 1 && (
              <div className={'wrapperAnimate ' + (this.state.activeStep === 1 ? 'focusField' : 'notFocusField')}>
                <Input
                  id='email'
                  label="Your email address"
                  value={this.state.email}
                  error={!this.state.emailValidation}
                  onChange={this.onChange1.bind(this)}
                  type='text'
                  inputRef={node => this.input1 = node}
                  onKeyPress={this.handleKey}
                  s={12}
                />
                {this.state.activeStep === 1 && (
                    <Button 
                    onClick={this.handleNext}
                    type="material-icons"
                    icon='navigate_next'
                    floating
                  >
                  </Button>
                )}
              </div>
            )}
            <br/>
            {this.state.activeStep >= 2 && (
              <Password
                handleNext={this.handleNext.bind(this)}
                activeStep={this.state.isPasswordActiveStep}
                onChange2={this.onChange2.bind(this)}/>
            )}
          </div>
        </div>
        <SnackBarCustom ref={instance => { this.child = instance }}/>
      </Card>
      </div>
    )
  }

  _confirm = async () => {
    const { name, email, password, nameFile } = this.state
      await this.props.signupMutation({
        variables: {
          name,
          email,
          password,
          nameFile,
        },
      })
      .then((result) => {
        const { token, user } = result.data.signup
        this._saveUserData(token, user)
      })
      .catch((e) => {
        if(e.graphQLErrors.length) {
          this.child._openSnackBar(e.graphQLErrors[0].message)
        } else {
          this.child._openSnackBar('error: No connection with server')
        }
      })
  }

  _saveUserData = (token, user) => {
    localStorage.setItem(AUTH_TOKEN, token)
    localStorage.setItem('userToken', JSON.stringify(user))
    this.props.client.resetStore().then(() => {
      navigate(`/`)
    })
  }
}

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!, $nameFile: String!) {
    signup(email: $email, password: $password, name: $name, nameFile:$nameFile) {
      token
      user {
        name
        id
      }
    }
  }
`

export default compose(
  withApollo,
  graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),

)(Signup)
