Rails.application.routes.draw do
  resources :users
  
  post 'login', to: 'sessions#create', as: 'login'
  post 'logout', to: 'sessions#destroy', as: 'logout'
end
