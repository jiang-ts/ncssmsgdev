class Hall < ActiveRecord::Base
  attr_accessible :name

  has_many :users
  belongs_to :sli, class_name: 'User'
end
