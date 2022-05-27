import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import { Paper, Typography, Card, CardMedia, Collapse } from "@material-ui/core"
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "6px 16px",
      cursor: 'pointer'
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    typography: {
      fontFamily: "'Lexend Deca', sans-serif",
    },
    workPeriod: {
      fontFamily: "'Lexend Deca', sans-serif",
      color: "#212121",
    },
    cover: {
      maxWidth: '20em',
      width: '70%',
      margin: 'auto',
      transition: 'all 0.5s ease-in-out'
    },
  }));

const TimelineCard = ({ work }) => {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const classes = useStyles();
  
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography
          color="textSecondary"
          variant="h6"
          className={classes.workPeriod}
        >
          {work.title}
        </Typography>
        <Typography
          color="textSecondary"
          variant="subtitle1"
          className={classes.typography}
        >
          {work.cardSubtitle}
        </Typography>
        <Card raised>
          <CardMedia
            className={classes.cover}
            component="img"
            image={work.url}
            title={work.cardTitle}
            style={{
                display: `${!open ? 'none' : 'flex'}`,
                transition: 'all 0.5s ease-in-out'
            }}
          />
        </Card>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper
          button
          onClick={handleClick}
          elevation={3}
          className={classes.paper}
        >
          <h2 className="work-company-name">{work.cardTitle}</h2>
          {open ? <ExpandLess /> : <ExpandMore />}
          <Collapse 
            in={open} 
            timeout="auto" 
            unmountOnExit
            component='div'
          >
            <ul className="work-company-list">
              {work.cardDetailedText.map((detail, index) => (
                <li key={index} >
                  <Typography
                    align="left"
                    color="textSecondary"
                    variant="body2"
                    className={classes.typography}
                  >
                    {detail}
                  </Typography>
                </li>
              ))}
            </ul>
          </Collapse>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default TimelineCard
