export const fetchAnswers = (userId, questionId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/questions/${questionId}/answers`
  })
};

export const createAnswer = answer => {
  return $.ajax({
    method: "POST",
    url: 'api/answers',
    data: {answer}
  })
};