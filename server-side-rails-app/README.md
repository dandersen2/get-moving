This is the Rails app that works in conjunction with the React-Native iOS app to make sure the User recieves an alert when they need to even if the mobile app isnt open and running. Most of the functionality of this side of the app lives within the rake task in

######get-moving-rails/lib/tasks/initiate_alert.rake

The events_controller.rb and event.rb model handle the rest of the data for each event received from the calendar.
