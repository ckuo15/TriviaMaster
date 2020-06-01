class Question < ApplicationRecord
  validates :body, presence: true

  has_one :answers,
  foreign_key: :question_id,
  class_name: :Answer

  belongs_to :category,
  foreign_key: :category_id,
  class_name: :Category

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User
end