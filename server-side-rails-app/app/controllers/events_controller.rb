class EventsController < ApplicationController

  def index
    @events = Event.all.order(created_at: :desc)
  end

  def create
    @event = load_event
    if (@event)
      puts "Updating existing event"
      update_event
    else
      puts "Creating new event"
      @event = Event.new(
        google_event_id: params["id"],
        name: params["name"],
        address: params["address"],
        user_email: params["user_email"],
        start_time: params["start_time"],
        departure_time: params["departure_time"],
        device_token: params["device_token"],
        user_lat: params["user_lat"],
        user_lng: params["user_lng"],
        event_lat: params["event_lat"],
        event_lng: params["event_lng"]
        )
    end

    if @event.save
      render text: "Event saved #{@event.google_event_id}"
    else
      render text: 'Event not saved'
      puts "Not saving #{@event.google_event_id}"
    end
  end

  private

  def update_event
    @event.name = params["name"]
    @event.address = params["address"]
    @event.user_email = params["user_email"]
    @event.start_time = params["start_time"]
    @event.device_token = params["device_token"]
    @event.user_lat = params["user_lat"]
    @event.user_lng = params["user_lng"]
    @event.event_lat = params["event_lat"]
    @event.event_lng = params["event_lng"]
  end

  def load_event
    Event.find_by(google_event_id: params[:id])
  end

end
