class CreateTodoUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :todo_users do |t|
      t.string :item
      t.boolean :is_complete
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
