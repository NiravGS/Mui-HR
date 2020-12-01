import React from "react";
import {
   makeStyles,
   Container,
   TextField,
   Checkbox,
   Button,
} from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";

// Images
import LoginBG from "./assets/Images/bg.jpg";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
   LoginBg: {
      height: "100vh",
      backgroundImage: `  linear-gradient( -45deg,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${LoginBG});`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "10%",
   },
   LoginMain: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      flexDirection: "column",
   },
   loginUi: {
      backgroundColor: "#fff",
      padding: "4% 7%",
      maxWidth: "470px",
      margin: "0 auto",
      borderRadius: "8px",
   },
   loginLogo: {
      "& h1": {
         fontSize: "50px",
         textAlign: "center",
         margin: "0 0 50px 0",
      },
   },
   loginInput: {
      width: "100%",
      marginBottom: "20px",
   },
   loginBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ["@media (max-width:500px)"]: {
         display: "block",
         textAlign: "center",
      },
   },
   loginWithcheck: {
      display: "flex",
      alignItems: "center",
      "& span": {
         padding: "0",
      },
      "& label": {
         margin: "0",
         color: "#7b7b7b",
         fontSize: "20px",
         fontWeight: "normal",
         cursor: "pointer",
      },
      ["@media (max-width:500px)"]: {
         justifyContent: "center",
         marginBottom: "10px",
      },
   },
   palette: {
      primary: {
         main: purple[500],
      },
      secondary: {
         main: "#e30342",
      },
   },
   loginForgot: {
      "& a": {
         color: "#103654",
         fontSize: "20px",
      },
   },
   loginBtn: {
      marginTop: "50px",
      "& button": {
         width: "100%",
         padding: "10px",
         fontSize: "16px",
      },
   },
});

const Login = () => {
   const classes = useStyles();
   return (
      <>
         <div className={classes.LoginBg}>
            <Container fixed>
               <div className={classes.LoginMain}>
                  <div className={classes.loginUi}>
                     <div className={classes.loginLogo}>
                        <h1>G-code</h1>
                     </div>
                     <form className={classes.loginForm}>
                        <TextField
                           id="outlined-basic"
                           label="Email Address"
                           variant="outlined"
                           color="secondary"
                           className={classes.loginInput}
                        />
                        <TextField
                           id="outlined-basic"
                           label="Password"
                           variant="outlined"
                           color="secondary"
                           className={classes.loginInput}
                        />
                        <div className={classes.loginBottom}>
                           <div className={classes.loginWithcheck}>
                              <Checkbox
                                 defaultChecked
                                 color="secondary"
                                 inputProps={{
                                    "aria-label": "secondary checkbox",
                                 }}
                                 id="remember"
                              />
                              <label for="remember">Remember me</label>
                           </div>
                           <div className={classes.loginForgot}>
                              <Link to="/">Forgot your password?</Link>
                           </div>
                        </div>
                        <div className={classes.loginBtn}>
                           <Button variant="contained" color="secondary">
                              Login
                           </Button>
                        </div>
                     </form>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Login;
