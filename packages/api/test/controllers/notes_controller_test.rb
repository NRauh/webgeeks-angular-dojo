# frozen_string_literal: true

require 'test_helper'

class NotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @game = games(:test_game)
    @note = notes(:one)
  end

  test 'should get index' do
    get game_notes_url(@game), as: :json
    assert_response :success
  end

  test 'should create note' do
    assert_difference('Note.count') do
      post game_notes_url(@game), params: note_params, as: :json
    end

    assert_response 201
  end

  test 'should show note' do
    get game_note_url(@game, @note), as: :json
    assert_response :success
  end

  test 'should update note' do
    patch game_note_url(@game, @note), params: note_params, as: :json
    assert_response 200
  end

  test 'should destroy note' do
    assert_difference('Note.count', -1) do
      delete game_note_url(@game, @note), as: :json
    end

    assert_response 204
  end

  private

  def note_params
    {
      note: {
        body: @note.body,
        name: @note.name
      }
    }
  end
end
