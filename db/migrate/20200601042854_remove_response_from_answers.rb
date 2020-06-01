class RemoveResponseFromAnswers < ActiveRecord::Migration[5.2]
  def change
    remove_column :answers, :response, :string
  end
end
