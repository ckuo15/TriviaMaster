class CreateCategoryChosen < ActiveRecord::Migration[5.2]
  def change
    create_table :category_chosens do |t|
      t.belongs_to :user
      t.belongs_to :category 
      t.timestamps
    end
  end
end
