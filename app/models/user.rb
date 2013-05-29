class User < ActiveRecord::Base
  self.inheritance_column = 'my_type'

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :token_authenticatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me,
    :first_name,
    :middle_name,
    :last_name,
    :hall,
    :room
  # attr_accessible :title, :body

  belongs_to :hall
    delegate :sli,
      to: :hall
  belongs_to :current_signout_record, class_name: 'SignoutRecord', foreign_key: 'signout_record_id'
    delegate :destination, :transportation, :companions, :time_out,
      to: :current_signout_record

  has_many :signout_records

  scope :students, where("type = 'student' or type = 'rla'")

  def hall_name
    return self.hall.name
  end
end
