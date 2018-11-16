import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
    loginCard: {
        margin: 'auto',
        minWidth: '30%'
    },

    cardFields: {
        minWidth: '92%'
    },

    title: {
        color: 'black',
    }
});

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            invalidCredential: "dispNone",
            
        }
    }

    componentWillMount() {
        //get request
        // let data = null;
        // let xhr = new XMLHttpRequest();
        // let that = this;
        // xhr.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {
        //         that.setState({
        //             upcomingMovies: JSON.parse(this.responseText).movies
        //         });
        //     }
        // });

        // xhr.open("GET", this.props.baseUrl + "movies?status=PUBLISHED");
        // xhr.setRequestHeader("Cache-Control", "no-cache");
        // xhr.send(data);
    }

    

    movieClickHandler = (movieId) => {
        this.props.history.push('/movie/' + movieId);
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });
        
        let username = "checkName";
        let password = "password123";
        const userAcessToken = "8998502401.7fed2c7.a14d53ddd2de41c2b79a087237da6c04";
        
        if(this.state.loginPassword === password && this.state.username === username)
        {
        
        
        // let dataLogin = null;
        // let xhrLogin = new XMLHttpRequest();
        // let that = this;
        // xhrLogin.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {

        //        that.setState({
                  this.setState({
                    loggedIn: true,
                    invalidCredential: "dispNone"
                });
        //    }
        // });
        sessionStorage.setItem("access-token", userAcessToken);
        //xhrLogin.open("GET", this.props.baseUrl + "/users/self/media/recent/?access_token=" + userAcessToken);
        //xhrLogin.send(dataLogin);
        this.props.history.push({
            pathname: '/home'
        })
        }

        else{

            if(this.state.username ==="" || this.state.loginPassword===""){
                this.setState({ invalidCredential: "dispNone" });
                return;
            }
            this.setState({ invalidCredential: "dispBlock" });
        }
    
}

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }


    render() {
        const { classes } = this.props;
        return (
            <div >
                <Header baseUrl={this.props.baseUrl} />

                <div className="flex-container">
                    
                    {/* <div > */}
                        <Card className={classes.loginCard}>
                            <CardContent >
                                <FormControl>
                                    <Typography className={classes.title}>
                                        LOGIN
                                    </Typography>
                                </FormControl>
                                <br /><br />
                                <FormControl required className={classes.cardFields}>
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                    <FormHelperText className={this.state.usernameRequired}>
                                       <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required className={classes.cardFields}>
                                    <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                    <Input id="loginPassword" type="password" loginpassword={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler} />
                                
                                    <FormHelperText className={this.state.loginPasswordRequired}>
                                    
                                        <span className="red">required</span>   
                                    </FormHelperText>

                                    <FormHelperText className={this.state.invalidCredential}>
                                    
                                    <span className="red">Incorrect username and/or password</span>   
                                    </FormHelperText> 

                                </FormControl>
                                <br /><br />
                                <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>   
                            </CardContent>
                        </Card>
                    {/* </div> */}
                </div>
            </div >
        )
    }
}

export default withStyles(styles)(Login);