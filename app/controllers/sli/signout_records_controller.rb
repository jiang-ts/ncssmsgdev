class Sli::SignoutRecordsController < ApplicationController
  before_filter :check_sli_credentials

  respond_to :json

  def show
    @signout_record = SignoutRecord.find(params[:id])
    render json: @signout_record, include: :user
  end

  private

  def check_sli_credentials
    unless (user_signed_in? && current_user.type == 'sli')
      render status: 401, json: {success: false, message: "You are not signed in as an SLI."}
    end
  end
end
