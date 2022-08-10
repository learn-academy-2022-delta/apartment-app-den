require 'rails_helper'



RSpec.describe Apartment, type: :model do
  it 'has to be real' do
    expect{ Apartment.new }.to_not raise_error
  end
end
