require 'rails_helper'

RSpec.describe "Apartments", type: :request do
    describe "POST /create" do
        it "creates a new apartment listing" do
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
                image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
            }
          }
          post '/apartments', params: apartment_params
          expect(response).to have_http_status(200)

          apartment = Apartment.first
          expect(apartment.length).to eq(1)
        end
      end
end
