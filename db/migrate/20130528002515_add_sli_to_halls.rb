class AddSliToHalls < ActiveRecord::Migration
  def change
    add_column :halls, :sli_id, :integer
  end
end
