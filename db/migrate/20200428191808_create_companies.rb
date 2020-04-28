class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :position
      t.date :date
      t.string :city
      t.string :country

      t.timestamps
    end
  end
end
