# frozen_string_literal: true

require 'test_helper'

class GameTest < ActiveSupport::TestCase
  test 'fixtures valid' do
    assert_valid_fixtures Game
  end
end
