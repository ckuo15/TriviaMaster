class Api::CategoriesController < ApplicationController

  def create 
    @category = Category.new(category_params)
    if @category.save
      render "api/categories/show"
    else 
      render json: @category.errors.full_messages, status: 422
    end
  end

  def show
    @category = Category.find(params[:id])
    if @categroy 
      render "api/categories/show"
    else 
      render json: @category.errors.full_messages, status: 401
    end 
  end

  private
  
  def category_params
    params.require(:category).permit(:name)
  end
end