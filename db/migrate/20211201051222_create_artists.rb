class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.integer :rank
      t.integer :description
      t.belongs_to :billboard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
