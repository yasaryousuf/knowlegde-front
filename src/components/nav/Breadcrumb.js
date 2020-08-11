import React from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { makeStyles } from "@material-ui/core/styles";

export default function Breadcrumb() {
  const useStyles = makeStyles((theme) => ({
    link: {
      display: "flex",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
    root: {
      minWidth: 275,
      flexGrow: 1,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
      flexGrow: 1,
    },
    pos: {
      marginBottom: 12,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      style={{ padding: 24 }}
    >
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <QuestionAnswerIcon className={classes.icon} />
        Add Question
      </Typography>
    </Breadcrumbs>
  );
}
