10.times do
  Billboard.create(name: Faker::Music.name, description: Faker::Music.instrument)
end 
puts "db seededs"