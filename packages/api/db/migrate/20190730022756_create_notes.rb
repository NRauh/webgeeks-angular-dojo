class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.references :game, foreign_key: true
      t.text :name, null: false
      t.text :body, null: false, default: ''

      t.timestamps
    end
  end
end
