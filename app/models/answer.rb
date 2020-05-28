class Question < ApplicationRecord
  belongs_to :answer,
  foreign_key: :question_id,
  class_name: :Answer
end