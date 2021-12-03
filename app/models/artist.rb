class Artist < ApplicationRecord
  belongs_to :billboard
  has_many :songs, dependant: :destroy
  validates :name, presence: true
end
