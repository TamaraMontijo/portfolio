class CreateRecommendations < ActiveRecord::Migration[5.2]
  def change
    create_table :recommendations do |t|
      t.text :text
      t.string :company
      t.string :connection

      t.timestamps
    end
  end
end
