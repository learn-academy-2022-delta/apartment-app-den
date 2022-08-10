require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'gets a list of apartments' do 

      user = User.where(email: 'BEnard76@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

      user.apartments.create(
        street: '444 Beyonce Blvd.',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1
    )

    get '/apartments'
    apartment = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(apartment.length).to eq 1
    end 
  end
end
