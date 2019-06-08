Rails.application.routes.draw do
  resources :users
  
  get  'logs',            to: 'users#logs'
  post 'log',             to: 'users#log'
  delete 'log/:id',       to: 'users#delete_log'
  post 'login',           to: 'sessions#create',  as: 'login'
  post 'logout',          to: 'sessions#destroy', as: 'logout'
end
