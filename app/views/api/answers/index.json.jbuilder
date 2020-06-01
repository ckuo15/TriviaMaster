@answers.each do |answer|
  json.set! answer.id do 
    json.extract! answer, :body, :question_id, :id, :created_at
    json.question do 
      json.extract! answer.question, :body, :user_id, :category_id, :id 
    end
  end 
end 