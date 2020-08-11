import React, { Component } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
  Grid,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ChipInput from "material-ui-chip-input";
import Navbar from "../nav/Navbar";
import Breadcrumb from "../nav/Breadcrumb";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ListSubheader from "@material-ui/core/ListSubheader";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

export default function Create() {
  const theme = {
    spacing: 8,
  };
  const useStyles = makeStyles((theme) => ({
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
    <div>
      <Navbar />
      <Breadcrumb />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Card className={classes.root}>
              <CardContent>
                <TextField
                  id="standard-full-width"
                  label="Question"
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  helperText="Be specific and imagine you’re asking a question to another person"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Include all the information someone would need to answer your question</p>"
                  onInit={(editor) => {
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
                <ChipInput
                  defaultValue={["foo", "bar"]}
                  fullWidth={true}
                  helperText="Add up to 5 tags to describe what your question is about"
                  label="Tags"
                />
                <Button variant="contained" color="primary">
                  Ask question
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardContent>
                <List
                  component="nav"
                  aria-label="main mailbox folders"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Hot question
                    </ListSubheader>
                  }
                >
                  <ListItem button>
                    <ListItemIcon>
                      <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bootstrap Fixed Sidebar Causes Main" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Choosing Bootstrap Vs Material Design" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
            <Card className={classes.root}>
              <CardContent>
                <List
                  component="nav"
                  aria-label="main mailbox folders"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Hot question
                    </ListSubheader>
                  }
                >
                  <ListItem button>
                    <ListItemIcon>
                      <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bootstrap Fixed Sidebar Causes Main" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Choosing Bootstrap Vs Material Design" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
