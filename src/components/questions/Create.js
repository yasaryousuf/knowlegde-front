import React from "react";
import {
  FormControl,
  InputLabel,
  Container,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChipInput from "material-ui-chip-input";
import Navbar from "../nav/Navbar";
import Breadcrumb from "../nav/Breadcrumb";
import { useFormik } from "formik";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { connect } from "react-redux";
import QuestionsStack from "../widgets/QuestionsStack";

function Create(props) {
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
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    body: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    tags: Yup.array().of(Yup.string().min(2)).required("Required").min(2),
  });
  const formik = useFormik({
    initialValues: props.newQuestion,
    validationSchema,
    onSubmit: (values, actions) => {
      props.saveQuestion(values);
    },
  });

  return (
    <div>
      <Navbar />
      <Breadcrumb />

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={8} spacing={4}>
            <Card className={classes.root} elevation={3}>
              <Box p={1}>
                <CardContent>
                  <form onSubmit={formik.handleSubmit}>
                    <Box mb={2}>
                      <TextField
                        name="title"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.title}
                        label="Question"
                        placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                        fullWidth={true}
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <FormHelperText
                        error={formik.errors.title ? true : false}
                      >
                        {formik.errors.title
                          ? formik.errors.title
                          : "Be specific and imagine you’re asking a question to another person"}
                      </FormHelperText>
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
                            onChange={(event, editor) => {
                              formik.setFieldValue("body", editor.getData());
                            }}
                          />
                          <FormHelperText error>
                            {formik.errors.body ? formik.errors.body : null}
                          </FormHelperText>
                        </Box>
                      </FormControl>
                    </Box>

                    <Box mb={5}>
                      <ChipInput
                        fullWidth={true}
                        label="Tags"
                        onChange={(e) => {
                          formik.setFieldValue("tags", [
                            ...formik.values.tags,
                            e,
                          ]);
                        }}
                        onAdd={(e) => {
                          formik.setFieldValue("tags", [
                            ...formik.values.tags,
                            e,
                          ]);
                        }}
                        onDelete={(e) => {
                          formik.setFieldValue(
                            "tags",
                            formik.values.tags.filter((item) => item !== e)
                          );
                        }}
                        value={formik.values.tags}
                      />
                      <FormHelperText error={formik.errors.tags ? true : false}>
                        {formik.errors.tags
                          ? formik.errors.tags
                          : "Add up to 5 tags to describe what your question is about"}
                      </FormHelperText>
                    </Box>
                    <Button variant="contained" color="primary" type="submit">
                      Ask question
                    </Button>
                  </form>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Box mb={4}>
              <QuestionsStack />
            </Box>
            <Box>
              <QuestionsStack />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    newQuestion: state.newQuestion,
    questions: state.questions,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveQuestion: (question) => {
      dispatch({
        type: "CREATE_QUESTION",
        question: question,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
