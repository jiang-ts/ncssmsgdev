class SignoutRecord < ActiveRecord::Base
  attr_accessible :companions, :destination, :expected_return, :notes, :signout_type, :time_in, :time_out, :transportation

  belongs_to :user
end
