import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { format } from "date-fns"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const CustomInput = withStyles({
  root: {
    margin: "1em",
    width: "80%",
    fontFamily: "'Lexend Deca', sans-serif",

    color: "#b3b3b3",
    "& label.Mui-focused": {
      color: "#181818",
    },
    "& .MuiFormLabel-root": {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: "1em",
      top: "-4px",
    },
    "& .MuiInputBase-input": {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: "1em",
      padding: "14px",
    },
    "& .MuiInputLabel-root::placeholder ": {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: "0.1em",
      padding: "14px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#eee",
    },
    "& .MuiOutlinedInput-multiline": {
      padding: 0,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b3b3b3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#181818",
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({

  button: {
    width: '80%',
    padding: "1em",
    backgroundColor: '#181818',
    color: "#fff",
    "&:hover": {
      boxShadow: "2px 2px 10px rgb(71, 71, 71)",
      backgroundColor: '#181818',
    color: "#fff",
    },
    "& span": {
      margin: 0,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <div className="footer-wrapper">
            <div className="footer-links">
              <a className="email-link" href={`mailto:${data.contactEmail}`}>
                {data.contactEmail}
              </a>
              <div className="social-icons">
                {data.social.map((socialLink, index) => (
                  <a
                    key={index}
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={socialLink.img} alt="icons"></img>
                  </a>
                ))}
              </div>
              <span>
                Build With <span aria-label="heart-emoji" role="image">❤️</span> by{" "}
                <a href="https://github.com/sujoyduttajad">Sujoy Dutta</a>
              </span>
              <span>Copyright @{format(new Date(), "yyyy")}</span>
            </div>
            <div className="footer-form-container">
              <form >
                <CustomInput
                  id="filled-required"
                  label="Your Full Name"
                  variant="outlined"
                />
                <CustomInput
                  id="filled-required"
                  label="Your Email"
                  variant="outlined"
                />
                <CustomInput
                  id="filled-required"
                  label="Your Message"
                  variant="outlined"
                  multiline
                  minRows={7}
                />
                <Button
                  type='submit' 
                  className={classes.button} 
                  variant="contained" 
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
