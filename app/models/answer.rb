class Answer < ApplicationRecord
  validates :body, presence: true 
  
  belongs_to :question,
  foreign_key: :question_id,
  class_name: :Question
end