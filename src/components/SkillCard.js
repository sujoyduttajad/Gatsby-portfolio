import React, { useState } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import DialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"

const useStyles = makeStyles({
  button: {
    marginTop: "1em",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#333',
      backgroundColor: '#fff',
      opacity: 0.8,
      outline: 'none',
      '&:hover': {
        backgroundColor: '#fff',
        opacity: 1
      },
    },
  }))(Button);

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const SkillCard = ({ skill }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()

  return (
    <div className="skill">
      <img src={skill.img} alt="skills" />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        {skill.header}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className={classes.dialogTitle}
          id="customized-dialog-title"
          onClose={handleClose}
          disableTypography
          style={{
            background: `${skill.primaryColor}`,
            color: `${skill.secondColor}`,
          }}
        >
          <h3 className="span-header">{skill.header}</h3>
          <ColorButton
            variant="outlined"
            onClick={handleClose}
          >
            Close
          </ColorButton>
        </DialogTitle>
        <DialogContent
          dividers
          style={{
            background: `${skill.primaryColor}`,
            color: `${skill.secondColor}`,
          }}
        >
          <p>{skill.para}</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SkillCard
