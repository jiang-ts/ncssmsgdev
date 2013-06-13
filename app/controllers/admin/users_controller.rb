class Admin::UsersController < ApplicationController
  before_filter :check_admin_credentials

  respond_to :json

  def add_sli
    email = params[:email]
    @sli = User.find_by_email(email)
    if @sli.nil?
      password, hall, first_name, middle_name, last_name = [:password, :hall, :first_name, :middle_name, :last_name].
        map {|x| params[x]}
      actual_hall = Hall.find_by_name(hall)
      if actual_hall.nil?
        actual_hall = Hall.create! name: hall
      end
      @sli = User.create! email: email,
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        hall: actual_hall,
        password: password,
        password_confirmation: password
      @sli.type = 'sli'
      @sli.save!
      render json: {message: 'Success, user account created!', success: true}
    else
      @hall = @sli.hall
      @hall.sli = @sli
      @sli.type = 'sli'
      if @hall.save! and @sli.save!
        render json: {message: 'Success!', success: true}
      else
        render status: 500, json: {message: 'Internal error!', success: false}
      end
    end
  end

  def list_slis
    @slis = User.where(type: 'sli')
    render json: @slis
  end

  private

  def check_admin_credentials
    unless (user_signed_in? and current_user.type == 'admin')
      render status: 401, json: {message: 'You have not logged in!', success: false}
    end
  end
end
