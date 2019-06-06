class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      head :ok
    else
      render status: :bad_request, json: { error: "Email or password is invalid" }
    end
  end

  def destroy
    session[:user_id] = nil
    head :ok
  end
end
