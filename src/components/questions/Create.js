import React, { Component } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
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

export default function Create() {
  const theme = {
    spacing: 8,
  };
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
    <div>
      <Navbar />
      <Breadcrumb />

      <Container maxWidth="lg">
        <Box>
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
        </Box>
      </Container>
    </div>
  );
}
