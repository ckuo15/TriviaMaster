class ApplicationController < ActionController::Base
    #protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    helper_method :signed_in?, :current_user

    private
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!current_user
    end

    def sign_in(user)
        user.reset_session_token!
        session[:session_token] = user.reset_session_token!
        @current_user = user 
    end

    def sign_out
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_signed_in!
        unless current_user 
            render json: { base: ['Invalid Credentials']}, status: 401
        end 
    end

end
