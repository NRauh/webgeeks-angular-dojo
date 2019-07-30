class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text :name, null: false
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
