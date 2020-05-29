@questions.each do |question|
  json.set! question.id do 
    json.extract! question, :body, :author_id, :category_id, :id, :created_at
  end 
end