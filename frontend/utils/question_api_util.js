
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

export const fetchCategoryQuestions = category_id => {
  return $.ajax({
    method: "GET",
    url: `api/questions/categoryIndex/${category_id}/questions`
  })
}