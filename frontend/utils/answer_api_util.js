
export const fetchAnswers = () => {
  return $.ajax({
    method: "GET",
    url: 'api/answers'
  })
};

export const createAnswer = answer => {
  return $.ajax({
    method: "POST",
    url: 'api/answers',
    data: {answer}
  })
};