import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../services/api'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: 'Login Teste State'
        }

        this.handleClick = this.handleClick(this);
    }

    componentDidMount() {
    }
    
    async handleClick() {
        let response = await api.post('/autenticar', {
            username: ''
        })
    }

    render() {
        let {fontSize} = this.props;
        let titulo = this.state.titulo;
        
        return  (
            <div style={{
                    height: '100vh', 
                    background: '#FAFAFA',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <div style={{
                    border: '1px solid #e6e6e6',
                    borderRadius: 1,
                    width: 350,
                    padding: 30,
                    background: '#FFF'
                }}>
                    <h4>{titulo}</h4>
                    <Form>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                            <Input style={{marginBottom:10}} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input style={{marginBottom:10}} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                        </FormGroup>
                        <Button color="primary" style={{width: '100%'}} onClick={this.handleClick}>Entrar</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
