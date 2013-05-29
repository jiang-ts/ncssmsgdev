class Sli::UsersController < ApplicationController
  before_filter :check_sli_credentials

  respond_to :json

  def add_student
    hall = params[:hall]
    @hall = Hall.find_by_name(hall)
    @student = @hall.users.create! email: params[:email],
      password: params[:password],
      password_confirmation: params[:password],
      first_name: params[:first_name],
      middle_name: params[:middle_name],
      last_name: params[:last_name],
      room: params[:room],
      dob: params[:dob],
      class_of: params[:class_of]
    @student.type = params[:is_rla] ? 'rla' : 'student'
    @student.save!
    render json: {message: 'User successfully created!', success: true}
  end

  def all_students
    @users = User.students
    render json: @users, only: [:id, :signed_out, :signout_record_id], methods: [:hall_name]
  end

  def show
    @user = User.find(params[:id])
    render json: @user, only: [:email,
                               :phone,
                               :hall_name,
                               :room,
                               :first_name,
                               :middle_name,
                               :last_name,
                               :gender,
                               :dob,
                               :class_of,
                               :signed_out,
                               :is_rla
                              ]
  end

  def list_signed_out
    @hall = current_user.hall
    @users = @hall.users.where(type: 'student').where(signed_out: true)
    render json: @users, only: [
      :id,
      :first_name,
      :middle_name,
      :last_name,
      :destination,
      :companions,
      :time_in,
      :expected_return,
      :time_out,
      :notes
    ]
  end

  private

  def check_sli_credentials
    unless (user_signed_in? && current_user.type == 'sli')
      render status: 401, json: {message: 'Invalid credentials!'}
    end
  end
end
