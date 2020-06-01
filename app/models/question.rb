class Question < ApplicationRecord
  validates :body, presence: true

  has_one :answer,
  foreign_key: :question_id,
  class_name: :Answer,
  dependent: :destroy

  after_create :create_answer

  belongs_to :category,
  foreign_key: :category_id,
  class_name: :Category

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  private 
  def create_answer
    Answer.create(question_id: self.id)
  end
end