class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :body, null:false 
      t.integer :user_id, null:false
      t.integer :category_id, null:false 

      t.index :user_id
      t.index :category_id 
      t.timestamps
    end
  end
end
