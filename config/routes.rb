Rails.application.routes.draw do
  root to: "welcome#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Example of vue_cli-rails
  get 'vue_demo/foo' => 'vue_demo#foo'
  get 'vue_demo/bar' => 'vue_demo#bar'
  get 'vue_demo/baz' => 'vue_demo#baz'
end