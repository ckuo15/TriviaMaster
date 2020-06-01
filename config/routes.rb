Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only:[:create, :show, :update] do 
      resources :questions, only:[:index] do 
        resources :answers, only:[:show]
      end
    end

    resource :session, only:[:create, :destroy]
    resources :categories, only:[:index, :show]
    resources :questions, only:[:create, :update, :show, :destroy]
    resources :answers, only:[:create, :index]
  end


  root to: 'static_pages#root'
end
