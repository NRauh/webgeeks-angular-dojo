# frozen_string_literal: true

Rails.application.routes.draw do
  resources :games do
    resources :notes
  end
end
