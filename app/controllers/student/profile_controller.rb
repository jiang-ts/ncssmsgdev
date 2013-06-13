class Student::ProfileController < ApplicationController
  before_filter :check_student_credentials

  def my_info
    render json: current_user, except: [:encrypted_password]
  end

  private

  def check_student_credentials
    unless (user_signed_in? && (['rla', 'student'].include? current_user.type))
      render status: 401, json: {success: false, message: "You're not signed in as a student."}
    end
  end
end
