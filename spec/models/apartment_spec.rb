require 'rails_helper'



RSpec.describe Apartment, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it 'has to be real' do
    expect{ Apartment.create }.to_not raise_error
  end
end
