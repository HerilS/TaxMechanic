import React, { useState } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import Error from "@material-ui/icons/Error"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
const useStyles = makeStyles(theme =>
  createStyles({

    image: {
      zIndex: -1,
      height: "105%",
      objectFit: "cover",
      filter: "brightness(21%)",
      overflow: 'auto'
    },
    imageOuter: {
      zIndex: -1,
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "45%",
      height: "100%",
      transform: "translate(-50%, -50%)",
    },
    root: {
      background: "transparent",
      position: "relative",
      paddingBottom: "5rem",
      paddingTop: "5rem",
      overflow: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      lineHeight: 0,
      marginTop: "-1px",
      marginBottom: "-1px",
    },
    text: {
      width: "30rem",
      textAlign: "center",
    },
    title: {
      zIndex: 2,
      paddingTop: "3rem",
      color: "#CEB095",
      fontSize: "3rem",
      lineHeight: "2.6rem",
      fontFamily: "Gilroy, sans-serif",
      paddingBottom: "2rem",
      fontWeight: 700,
    },
    para: {
      color: "#CEB095",
      fontSize: "1rem",
      lineHeight: "1.7rem",
      fontFamily: "Gilroy, sans-serif",
      marginRight: "2rem",
      marginLeft: "2rem",
    },
    buttonContainer: {
      textAlign: "center",
      paddingTop: "1.5rem",
    },
    helperText: {
      fontFamily: "Gilroy, sans-serif",
    },
    textField: {
      paddingBottom: "1.5rem",
      "& label.Mui-focused": {
        color: "#CEB095",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#CEB095",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: 700,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#CEB095",
      },
      "& .MuiOutlinedInput-root": {
        width: "29rem",
        [theme.breakpoints.down(600)]: {
          width: "20rem",
        },
        [theme.breakpoints.down(360)]: {
          width: "16rem",
        },
        "& fieldset": {
          borderColor: "#CEB095",
          borderWidth: "0.2rem",
          color: "#CEB095",
        },
        "&:hover fieldset": {
          borderColor: "#CEB095",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#CEB095",
          borderWidth: "0.2rem",
        },
      },
    },
    textFieldError: {
      paddingBottom: "1.5rem",
      "& label.Mui-focused": {
        color: "#CEB095",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#CEB095",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: 600,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#CEB095",
      },
      "& .MuiOutlinedInput-root": {
        width: "29rem",
        [theme.breakpoints.down(600)]: {
          width: "20rem",
        },
        "& fieldset": {
          borderColor: "#CEB095",
          borderWidth: "0.2rem",
          color: "#CEB095",
        },
        "&:focus fieldset": {
          borderColor: "#CEB095",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#CEB095",
          borderWidth: "0.2rem",
        },
      },
    },
    error: {
      verticalAlign: "middle",
      width: "1rem",
      marginRight: "0.5rem",
      marginLeft: "-0.8rem",
    },
    moreCaseStudiesButton: {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
      zIndex: 3,
      color: "white",
      background:
        "#90663E",
      textTransform: "none",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 500,
      padding: "0.7rem",
      transition: "all 0.4s ease",
      "&:hover": {
        background:
          "#90663E",
        opacity: "85%",
      },
    },
  })
)
export default function PanelFour() {
  const classes = useStyles()
  // States for form fields and error handling
  const [name, setName] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [nameError, setNameError] = useState("")

  const [email, setEmail] = useState("")
  const [isEmailError, setIsEmailError] = useState(false)
  const [emailError, setEmailError] = useState("")

  const [paragraph, setParagraph] = useState("")
  const [isParagraphError, setIsParagraphError] = useState(false)
  const [paragraphError, setParagraphError] = useState("")

  // Setting the form field to state
  const onNameChange = event => {
    setName(event.target.value)
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onParagraphChange = event => {
    setParagraph(event.target.value)
  }

  // On submit function function for error handling
  const onSubmit = e => {
    setIsEmailError(false)
    setIsNameError(false)
    setIsParagraphError(false)
    if (name === "") {
      e.preventDefault()
      setIsNameError(true)
      setNameError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) !== true
    ) {
      e.preventDefault()
      setIsEmailError(true)
      setEmailError(
        <div>
          <Error className={classes.error} />
          <span>Invalid Email</span>
        </div>
      )
    }
    if (paragraph === "") {
      e.preventDefault()
      setIsParagraphError(true)
      setParagraphError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
  }
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 65) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className={classes.root}>
        <div className={classes.imageOuter}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            className={classes.image}
            loading="eager"
            alt="Contact"
          />
        </div>
        <div className={classes.text}>
          <div className={classes.title}>Contact Us </div>
          <div className={classes.formContainer}>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />{" "}
              {/*Hidden Input for bot detection*/}
              {/*Text field for Name*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "#CEB095",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={
                  isNameError ? classes.textFieldError : classes.textField
                }
                name="Name"
                label="Name"
                value={name}
                onChange={onNameChange}
                helperText={nameError}
                error={isNameError}
                variant="outlined"
                color="secondary"
              />
              {/*Text field for Email*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "#CEB095",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={
                  isEmailError ? classes.textFieldError : classes.textField
                }
                name="Email"
                label="Email"
                value={email}
                onChange={onEmailChange}
                helperText={emailError}
                error={isEmailError}
                variant="outlined"
              />
              {/*Text field for Message*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "#CEB095",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                multiline
                rows={8}
                className={
                  isParagraphError ? classes.textFieldError : classes.textField
                }
                name="Message"
                label="Message"
                value={paragraph}
                onChange={onParagraphChange}
                helperText={paragraphError}
                error={isParagraphError}
                variant="outlined"
              />
              <div>
                {/*Submit Button*/}
                <Button
                  type="submit"
                  className={classes.moreCaseStudiesButton}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
