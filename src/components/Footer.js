import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { format } from "date-fns"
import { makeStyles } from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  inputFields: {
    margin: '1em',
    fontFamily: "'Lexend Deca', sans-serif",
    color: '#181818',
  },
  form: {
    fontFamily: "'Lexend Deca', sans-serif",
  }
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
              Build With <icon>❤</icon> by{" "}
              <a href="https://github.com/sujoyduttajad">Sujoy Dutta</a>
            </span>
            <span>Copyright @{format(new Date(), "yyyy")}</span>
          </div>
          <div className="footer-form-container">
            <FormControl className={classes.form}>
              <TextField
                className={classes.inputFields}
                id="filled-required"
                label="Your Full Name"
                variant="outlined"
              />
              <TextField
                className={classes.inputFields}
                id="filled-required"
                label="Your Email"
                variant="outlined"
              />
              <TextField
                className={classes.inputFields}
                id="filled-required"
                label="Your Message"
                variant="outlined"w
              />
            </FormControl >
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
