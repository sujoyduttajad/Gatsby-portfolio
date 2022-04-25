import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
// import {Dialog, Button, DialogTitle, Typography, MuiDialogTitle} from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import DialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from '@material-ui/core/DialogContent';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

//   const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//       <MuiDialogTitle className={classes.root} {...other}>
//         <Typography variant="h6">{children}</Typography>
//       </MuiDialogTitle>
//     );
//   });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);


const SkillCard = ({ skill }) => {
  // const [hover, setHover] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div
      className="skill"
      //   onMouseEnter={() => setHover(true)}
      //   onMouseLeave={() => setHover(false)}
    >
      <img src={skill.img} alt="skills" />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <p>{skill.para}</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SkillCard
