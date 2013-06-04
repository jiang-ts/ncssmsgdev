class Api::V1::TokensController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def create
    email = params[:email]
    password = params[:password]
    if request.format != :json
      render status: 406, json: {message: 'Request must be json-format.'}
      return
    end
    if email.nil? or password.nil?
      render status: 400, json: {message: 'Request must contain email or password.'}
      return
    end
    @user = User.find_by_email(email)
    if @user.nil?
      logger.info("User #{email} failed sign-in.")
      render status: 401, json: {message: 'Access forbidden, invalid email.'}
      return
    end
    @user.ensure_authentication_token!
    if @user.valid_password?(password)
      render status: 200, json: {token: @user.authentication_token, type: @user.type}
    else
      logger.info("User #{email} failed sign-in.")
      render status: 401, json: {message: 'Access forbidden, invalid password.'}
    end
  end

  def destroy
    @user = User.find_by_authentication_token(params[:id])
    if @user.nil?
      logger.info("Token not found.")
      render status: 404, json: {message: 'Invalid token.'}
    else
      @user.reset_authentication_token!
      render status: 200, json: {token: params[:id]}
    end
  end
end
