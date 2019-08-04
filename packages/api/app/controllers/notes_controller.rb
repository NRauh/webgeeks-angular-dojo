# frozen_string_literal: true

class NotesController < ApplicationController
  before_action :set_game
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @notes = @game.notes.all
    render json: @notes
  end

  def show
    render json: @note
  end

  def create
    @note = @game.notes.new(note_params)

    if @note.save
      render json: @note, status: :created, location: game_note_url(@game, @note)
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
  end

  private

  def set_game
    @game = Game.find(params[:game_id])
  end

  def set_note
    @note = @game.notes.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:name, :body)
  end
end
