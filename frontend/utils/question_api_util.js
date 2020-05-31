
export const fetchQuestions = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/questions`
  })
};