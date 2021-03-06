Rails.application.routes.draw do

  root to: 'pages#home'

  resources :projects, only: [:index, :show]

  resources :companies, only: :index

  resources :recommendations, only: :index

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
