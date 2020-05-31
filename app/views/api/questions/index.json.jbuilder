json.questions do 
    @questions.each do |question|
      json.set! question.id do 
        json.extract! question, :body, :user_id, :category_id, :id, :created_at
        json.user do
          json.extract! question.user, :username, :id
        end
      end 
    end
end