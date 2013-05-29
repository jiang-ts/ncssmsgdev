class AddUserIdToSignoutRecord < ActiveRecord::Migration
  def change
    add_column :signout_records, :user_id, :integer
  end
end
