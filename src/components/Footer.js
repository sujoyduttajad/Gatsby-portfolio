import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { format } from "date-fns"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const CustomInput = withStyles({
  root: {
    margin: "1em",
    width: "80%",
    fontFamily: "'Lexend Deca', sans-serif",

    color: "#181818",
    "& label.Mui-focused": {
      color: "#181818",
    },
    '& .MuiFormLabel-root': {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: '1em',
      top: '-4px'
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
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#181818",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#181818",
      },
    },
  },
})(TextField)

const Footer = () => {
  // const classes = useStyles();

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
              <form>
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
                  rows={4}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
