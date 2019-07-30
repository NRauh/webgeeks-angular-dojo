ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  def assert_valid_fixtures(model)
    model.find_each do |instance|
      assert instance.valid?, "#{model} fixtures invalid: #{instance.errors.full_messages}"
    end
  end
end
