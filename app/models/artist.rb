class Artist < ApplicationRecord
  belongs_to :billboard
  has_many :songs, dependant: :destroy
  validates :name, :description, presence: true
end
