class Category < ApplicationRecord

  has_many :questions,
  foreign_key: :category_id,
  class_name: :Question

  has_many :categorieschosen
  has_many :users, through: :categorieschosen
end