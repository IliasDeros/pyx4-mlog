class User < ApplicationRecord
  has_secure_password
  has_many :movie_logs

  validates :email, presence: true, uniqueness: true
end
