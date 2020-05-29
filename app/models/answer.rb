class Question < ApplicationRecord

  validates :body, presence: true 
  
  belongs_to :answer,
  foreign_key: :question_id,
  class_name: :Answer
end