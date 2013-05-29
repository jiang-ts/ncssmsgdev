class Student::SignoutRecordsController < ApplicationController
  before_filter :check_student_credentials

  respond_to :json

  def create
    if current_user.signed_out
      render json: {success: false, message: 'You cannot sign out again.'}
    else
      current_user.current_signout_record =
        current_user.signout_records.create! destination: params[:destination],
          transportation: params[:transportation],
          companions: params[:companions],
          time_out: params[:time_out],
          expected_return: params[:expected_return],
          notes: params[:notes],
          signout_type: params[:signout_type]
      current_user.signed_out = true
      current_user.save!
      render json: {success: true, message: "You've successfully signed out!"}
    end
  end

  def sign_in
    if current_user.signed_out
      sr = current_user.current_signout_record
      sr.time_in = params[:time_in] ? params[:time_in] : DateTime.now
      sr.save!
      current_user.current_signout_record = nil
      current_user.signed_out = false
      current_user.save!
      render json: {success: true, message: "You've successfully signed in!"}
    else
      render json: {success: false, message: "You have already signed in!"}
    end
  end

private

  def check_student_credentials
    unless (user_signed_in?)
      render status: 401
    end
  end
end
