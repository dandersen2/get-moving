class Event < ActiveRecord::Base
  validates :name, presence: true
  validates :address, presence: true
  validates :user_email, presence: true
  validates :start_time, presence: true
  validates :device_token, presence: true

  before_save :set_new_latest

  def set_new_latest
    prev_notified = Event.where(user_email: user_email, google_event_id: self.google_event_id).where(has_notified: true).exists?
    if prev_notified
      errors.add(:base, 'Event already_notified')
    end
  end

end
