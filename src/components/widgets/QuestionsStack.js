import React from "react";
import ListItemLink from "../widgets/ListItemLink";
import { Card, CardContent, List, ListSubheader } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

function QuestionsStack() {
  return (
    <Card elevation={3}>
      <CardContent>
        <List
          dense={true}
          component="nav"
          aria-label="main mailbox folders"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Hot question
            </ListSubheader>
          }
        >
          <ListItemLink
            to={"/"}
            primary="My first Hello world"
            icon={<QuestionAnswerIcon />}
          />{" "}
          <ListItemLink
            to={"/"}
            primary="Bootstrap Fixed Sidebar Causes Main"
            icon={<QuestionAnswerIcon />}
          />{" "}
          <ListItemLink
            to={"/"}
            primary="Choosing Bootstrap Vs Material Design"
            icon={<QuestionAnswerIcon />}
          />
        </List>
      </CardContent>
    </Card>
  );
}

export default QuestionsStack;
