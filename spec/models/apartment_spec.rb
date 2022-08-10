require 'rails_helper'



RSpec.describe Apartment, type: :model do
  it 'has to exist' do 
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
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
        user_id: 1
    )
    expect(apartment).to be_valid
  end
  
  it 'is not valid without city' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
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
    expect(apartment.errors[:city]).to_not be_empty
  end
  it 'is not valid without state' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1
    )
    expect(apartment.errors[:state]).to_not be_empty
  end
  it 'is not valid without manager' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1    
    )
    expect(apartment.errors[:manager]).to_not be_empty
  end
  it 'is not valid without email' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1
    )
    expect(apartment.errors[:email]).to_not be_empty
  end
  it 'is not valid without price' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1
    )
    expect(apartment.errors[:price]).to_not be_empty
  end
  it 'is not valid without bedrooms' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1
    )
    expect(apartment.errors[:bedrooms]).to_not be_empty
  end
  it 'is not valid without bathrooms' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1
    )
    expect(apartment.errors[:bathrooms]).to_not be_empty
  end
  it 'is not valid without pets' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        image: 'https://images.unsplash.com/photo-1630699034276-0be879da7ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
        user_id: 1
    )
    expect(apartment.errors[:pets]).to_not be_empty
  end
  it 'is not valid without image' do
    user = User.where(email: 'MsTina@test.com').first_or_create(password: '1122abab', password_confirmation: '1122abab')

    apartment = user.apartments.create(
        street: '444 Beyonce Blvd.',
        city: 'Houston',
        state: 'Texas',
        manager: 'Tina Knowles',
        email: 'MsTina@test.com',
        price: '2000',
        bedrooms: 3,
        bathrooms: 2,
        pets: 'yes',
        user_id: 1
    )
    expect(apartment.errors[:image]).to_not be_empty
  end
end
