Rails.application.routes.draw do
  get 'home/landing'

  get 'home/index'
  root 'home#index'
  post "home/landing"

  resources :contacts
  resources :homesg

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
