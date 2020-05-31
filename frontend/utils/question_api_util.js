
export const fetchQuestions = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/questions`
  })
};

export const createQuestion = question => {
  return $.ajax({
    method: "POST",
    url: 'api/questions',
    data: {question}
  })
}