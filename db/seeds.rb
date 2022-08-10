# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: 'BEnard76@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

user2 = User.create(email: 'NacyNan85@test.com', password: '2233bcbc', password_confirmation:'2233bcbc')
    
        


apartment1= [
    {
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'

    },
    {
        street: '1234 Mercedes Lane',
        city: 'Chucalissa',
        state: 'Mississippi',
        manager: 'Clifford Pynk',
        email: 'CiffProperty@test.com',
        price: '2600',
        bedrooms: 4,
        bathrooms: 4,
        pets: 'no',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80',
       

    }
    
]

apartment2= [
    {
        street: '1776 Tavern Drive',
        city: 'Oceanside',
        state: 'California',
        manager: 'Brenda Bunch',
        email: 'BrendaBunch@test.com',
        price: '2950',
        bedrooms: 4,
        bathrooms: 3,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'

    },
]

apartment1.each do |attributes|
    user2.apartments.create(attributes)
    p "each apartments attributes #{attributes}"
end

apartment2.each do |attributes|
    user1.apartments.create(attributes)
    p "each apartments attributes #{attributes}"
end