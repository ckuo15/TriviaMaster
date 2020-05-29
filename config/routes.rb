Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only:[:create, :show, :update] do 
      resources :questions, only:[:index]
    end
  end

  resource :session, only:[:create, :destroy]
  resources :questions, only:[:create, :update, :show, :destroy]
  resources :answers, only:[:create]
  resources :categories, only:[:index]

  root to: 'static_pages#root'
end
