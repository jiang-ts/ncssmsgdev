class CreateSignoutRecords < ActiveRecord::Migration
  def change
    create_table :signout_records do |t|
      t.datetime :time_out
      t.datetime :expected_return
      t.datetime :time_in
      t.string :destination
      t.string :companions
      t.string :transportation
      t.string :notes
      t.string :signout_type

      t.timestamps
    end
  end
end
