# frozen_string_literal: true

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  test 'fixtures valid' do
    assert_valid_fixtures Game
  end
end
