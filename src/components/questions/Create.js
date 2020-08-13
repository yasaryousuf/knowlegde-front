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
import { useFormik } from "formik";

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
      padding: "20px",
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
  const formik = useFormik({
    initialValues: {
      title: "Question title",
      body: "",
      tags: ["foo", "bar"],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  return (
    <div>
      <Navbar />
      <Breadcrumb />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Card className={classes.root} elevation={3}>
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Box mb={2}>
                    <TextField
                      id="standard-full-width"
                      required={true}
                      label="Question"
                      placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                      helperText="Be specific and imagine you’re asking a question to another person"
                      fullWidth={true}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={formik.handleChange}
                      value={formik.values.title}
                    />
                  </Box>
                  <Box mb={4}>
                    <FormControl fullWidth>
                      <InputLabel shrink={true} required>
                        Details
                      </InputLabel>
                      <Box mt={2}>
                        <CKEditor
                          editor={ClassicEditor}
                          data={formik.values.body}
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
                          onChange={formik.handleChange}
                          value={formik.values.body}
                        />
                      </Box>
                    </FormControl>
                  </Box>

                  <Box mb={5}>
                    <ChipInput
                      fullWidth={true}
                      helperText="Add up to 5 tags to describe what your question is about"
                      label="Tags"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.tags}
                    />
                  </Box>
                  <Button variant="contained" color="primary" type="submit">
                    Ask question
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Box mb={4}>
              <Card className={classes.root} elevation={3}>
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
            </Box>
            <Box>
              <Card className={classes.root} elevation={3}>
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
