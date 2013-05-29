class AddSignoutRecordReferenceToUsers < ActiveRecord::Migration
  def change
    add_column :users, :signout_record_id, :integer
  end
end
