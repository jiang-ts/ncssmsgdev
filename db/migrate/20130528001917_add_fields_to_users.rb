class AddFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :middle_name, :string
    add_column :users, :last_name, :string
    add_column :users, :hall_id, :integer
    add_column :users, :room, :string
    add_column :users, :phone, :string
    add_column :users, :dob, :datetime
    add_column :users, :class_of, :string
    add_column :users, :gender, :string
    add_column :users, :signed_out, :boolean
    add_column :users, :type, :string
  end
end
