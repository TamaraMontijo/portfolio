class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :function
      t.text :project_description
      t.string :year
      t.text :function_description

      t.timestamps
    end
  end
end
