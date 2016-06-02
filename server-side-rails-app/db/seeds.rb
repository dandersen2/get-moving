# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Event.create!(name: "Go to my apartment1",
              address: "647 Flatbush Ave, Brooklyn, NY 11225",
              user_email: "getmovingfinalproject@gmail.com",
              start_time: "2016-02-25T20:40:30+00:00",
              departure_time: "2016-02-25T20:40:30+00:00",
              is_latest: true,
              has_notified: false,
              device_token: "267b5fe45204bd566743af4804f1de427b081dcfe519659593",
              event_lng: -73.95998,
              event_lat: 40.65764,
              user_lng: -74.0093456027814,
              user_lat: 40.7063627314525,
              created_at: "2016-02-25 00:31:05",
              updated_at: "2016-02-25 00:31:05",
              google_event_id: "1")

Event.create!(name: "Go to my apartment2",
              address: "647 Flatbush Ave, Brooklyn, NY 11225",
              user_email: "getmovingfinalproject@gmail.com",
              start_time: "2016-02-25T20:40:30+00:00",
              departure_time: "2016-02-25T20:40:30+00:00",
              is_latest: true,
              has_notified: false,
              device_token: "267b5fe45204bd566743af4804f1de427b081dcfe519659593",
              event_lng: -73.95998,
              event_lat: 40.65764,
              user_lng: -74.0093456027814,
              user_lat: 40.7063627314525,
              created_at: "2016-02-25 00:31:05",
              updated_at: "2016-02-25 00:31:05",
              google_event_id: "1")

Event.create!(name: "Go to my apartment3",
              address: "647 Flatbush Ave, Brooklyn, NY 11225",
              user_email: "getmovingfinalproject@gmail.com",
              start_time: "2016-02-25T20:40:30+00:00",
              departure_time: "2016-02-25T20:40:30+00:00",
              is_latest: true,
              has_notified: false,
              device_token: "267b5fe45204bd566743af4804f1de427b081dcfe519659593",
              event_lng: -73.95998,
              event_lat: 40.65764,
              user_lng: -74.0093456027814,
              user_lat: 40.7063627314525,
              created_at: "2016-02-25 00:31:05",
              updated_at: "2016-02-25 00:31:05",
              google_event_id: "1")

Event.create!(name: "Go to my parents house1",
              address: "10 Daffodil Lane, Cos Cob, CT. 06807",
              user_email: "getmovingfinalproject@gmail.com",
              start_time: "2016-02-25T20:50:30+00:00",
              departure_time: "2016-02-25T20:50:30+00:00",
              is_latest: true,
              has_notified: false,
              device_token: "267b5fe45204bd566743af4804f1de427b081dcfe519659593",
              event_lng: -73.587387,
              event_lat: 41.085815,
              user_lng: -74.0093456027814,
              user_lat: 40.7063627314525,
              created_at: "2016-02-25 00:31:05",
              updated_at: "2016-02-25 00:31:05",
              google_event_id: "2")

Event.create!(name: "Go to my parents house2",
              address: "10 Daffodil Lane, Cos Cob, CT. 06807",
              user_email: "getmovingfinalproject@gmail.com",
              start_time: "2016-02-25T20:50:30+00:00",
              departure_time: "2016-02-25T20:50:30+00:00",
              is_latest: true,
              has_notified: false,
              device_token: "267b5fe45204bd566743af4804f1de427b081dcfe519659593",
              event_lng: -73.587387,
              event_lat: 41.085815,
              user_lng: -74.0093456027814,
              user_lat: 40.7063627314525,
              created_at: "2016-02-25 00:31:05",
              updated_at: "2016-02-25 00:31:05",
              google_event_id: "2")

Event.create!(name: "Go to my parents house3",
              address: "10 Daffodil Lane, Cos Cob, CT. 06807",
              user_email: "getmovingfinalproject@gmail.com",
              start_time: "2016-02-25T20:50:30+00:00",
              departure_time: "2016-02-25T20:50:30+00:00",
              is_latest: true,
              has_notified: false,
              device_token: "267b5fe45204bd566743af4804f1de427b081dcfe519659593",
              event_lng: -73.587387,
              event_lat: 41.085815,
              user_lng: -74.0093456027814,
              user_lat: 40.7063627314525,
              created_at: "2016-02-25 00:31:05",
              updated_at: "2016-02-25 00:31:05",
              google_event_id: "2")


# ____________________________________________________________________
# Event.create!(name: 'Job Interview at Apple',
#               address: '1 Infinite Loop, Cupertino, California 95014',
#               user_email: 'getmovingfinalproject@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "1234556575478768632456458674",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at Google',
#               address: '1600 Amphitheatre Parkway in Mountain View, Santa Clara County, California',
#               user_email: 'getmovingfinalproject@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123455657547876213576458674",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at Facebook',
#               address: '1 Hacker Way, Palo Alto, California 12345',
#               user_email: 'getmovingfinalproject@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123455657547876868576478974",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at Duane Reade',
#               address: '60 Wall street',
#               user_email: 'getmovingfinalproject@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123455654257876868576458674",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at CVS',
#               address: '60 Wall street',
#               user_email: 'getmovingfinalproject@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123455657547878968576458674",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at Toys R Us',
#               address: '60 Wall street',
#               user_email: 'getmovingfinalproject@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123455564547876868576458674",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at Whole Foods',
#               address: '60 Wall street',
#               user_email: 'getmovingapp1@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123452357547876868576458674",
#               has_notified: true,
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at PlanetFitness',
#               address: '60 Wall street',
#               user_email: 'getmovingapp1@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123455657543476834576458674",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

# Event.create!(name: 'Job Interview at Twitter',
#               address: '60 Wall street',
#               user_email: 'getmovingapp1@gmail.com',
#               start_time: DateTime.parse('2016-02-23T22:32:57+00:00'),
#               departure_time: DateTime.parse('2016-02-23T22:22:57+00:00'),
#               device_token: "123455657547876834576458674",
#               user_lat: '40.7332578',
#               user_lng: '-74.0252455',
#               event_lat: '40.758740',
#               event_lng: '-73.978674'
#               )

