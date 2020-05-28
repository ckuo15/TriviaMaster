class Category < ApplicationRecord

  has_many :questions,
  foreign_key: :category_id,
  class_name: :Question
end