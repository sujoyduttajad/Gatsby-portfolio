import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
// import { Chrono } from "react-chrono"
import { makeStyles } from "@material-ui/core/styles"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const WorkHistory = () => {
  const classes = useStyles()
  return (
    <section className="section" id="employement">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <div style={{ width: "80%", height: "50%" }}>
            {/* <Chrono 
                items={data.workHistory}
                hideControls={true} 
                scrollable={false}
                theme={{ 
                  primary: "#2F9DF1",
                  secondary: "#333",
                  cardForeColor: "#2F9DF1",
                  titleColor: "#fff"
                }}
                mode="VERTICAL_ALTERNATING" 
              /> */}
            <Timeline align="alternate">
              {data.workHistory.map(work => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h2">
                        {work.cardTitle}
                      </Typography>
                      <ul>
                        {work.cardDetailedText.map(detail => (
                          <li>
                            <Typography>{detail}</Typography>
                          </li>
                        ))}
                      </ul>
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
