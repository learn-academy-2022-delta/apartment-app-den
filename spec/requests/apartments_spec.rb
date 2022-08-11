require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "POST /create" do
    it "creates a new apartment listing" do
      user1 = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

      apartment_params = {
        apartment: {
            street: '444 Beyonce Blvd.',
            city: 'Houston',
            state: 'Texas',
            manager: 'Tina Knowles',
            email: 'MsTina@test.com',
            price: '2000',
            bedrooms: 3,
            bathrooms: 2,
            pets: 'yes',
            image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
            user_id: user1.id
        }
      }
      post '/apartments', params: apartment_params

      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)

      expect(apartment.length).to eq(14)
      expect(apartment['street']).to eq "444 Beyonce Blvd."
      expect(apartment['city']).to eq "Houston"
      expect(apartment['state']).to eq "Texas"
      expect(apartment['email']).to eq "MsTina@test.com"
      expect(apartment['price']).to eq "2000"
      expect(apartment['bedrooms']).to eq 3
      expect(apartment['bathrooms']).to eq 2
      expect(apartment['pets']).to eq "yes"
      expect(apartment['image']).to eq "https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
    end
  end
end
