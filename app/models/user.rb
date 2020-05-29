class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    attr_reader :password 

    has_one_attached :photo

    has_many :questions,
    foreign_key: :user_id,
    class_name: :Question

    has_many :categorieschosen
    has_many :categories, through: :categorieschosen

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end 

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end 

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end 

    def is_password?(pw)
        bcrypt_pw = BCrypt::Password.new(self.password_digest)
        bcrypt_pw.is_password?(pw)
    end 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

end