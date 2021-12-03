Rails.application.routes.draw do
    root 'billboards#index'

    resources :billboards do
      resources :artists
    end
    resources :artists, except: [:index, :new, :create, :edit, :show, :update, :destroy] do
      resources :comments
    end
end
