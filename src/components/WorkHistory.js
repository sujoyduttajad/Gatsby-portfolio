import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { makeStyles } from "@material-ui/core/styles"
import Timeline from "@material-ui/lab/Timeline"
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
    padding: "6px 16px",
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
    width: '70%',
    margin: 'auto'
  },
}))

const WorkHistory = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  
  return (
    <section className="section" id="employement">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <div style={{ width: "80%", height: "50%" }}>
            <Timeline align="alternate">
              {data.workHistory.map(work => (
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
                        title="Live from space album cover"
                      />
                    </Card>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper button onClick={handleClick} elevation={3} className={classes.paper}>
                      <h2 className="work-company-name">{work.cardTitle}</h2>
                      {open ? <ExpandLess /> : <ExpandMore />}
                      <Collapse in={open} timeout="auto" unmountOnExit>
                      <ul className="work-company-list">
                        {work.cardDetailedText.map(detail => (
                          <li>
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
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHistory
