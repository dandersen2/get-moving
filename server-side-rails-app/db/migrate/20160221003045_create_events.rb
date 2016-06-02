class CreateEvents < ActiveRecord::Migration
  def change
    create_table  :events do |t|
      t.string    :name
      t.string    :address
      t.string    :user_email
      t.datetime  :start_time
      t.datetime  :departure_time
      t.boolean   :is_latest, default: true
      t.boolean   :has_notified, default: false
      t.string    :device_token, null:false
      t.float     :event_lng
      t.float     :event_lat
      t.float     :user_lng
      t.float     :user_lat

      t.timestamps null: false
    end
  end
end

