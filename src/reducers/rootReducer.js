const initState = {
  questions: [
    {
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      tags: ["nesciunt", "quas"],
    },
    {
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      tags: ["odio", "magnam"],
    },
    {
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body:
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      tags: ["facilis", "autem"],
    },
  ],
  newQuestion: {
    title: "title here",
    body: "body here",
    tags: ["tags", "here"],
  },
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CREATE_QUESTION") {
    let newQuestionsArr = [...state.questions, action.question];
    return { ...state, questions: newQuestionsArr };
  }
  return state;
};

export default rootReducer;
