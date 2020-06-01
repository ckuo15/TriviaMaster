class Api::QuestionsController < ApplicationController

  def create 
    @question = Question.new(question_params)
    @question[:user_id] = current_user.id 
    if @question.save!
      render :show
    else 
      render json: @question.errors.full_messages, status: 401
    end 
  end

  def show 
    Question.find_by(params[:id])
  end

  def index 
    user = User.find(params[:user_id])
    @questions = user.questions.includes(:user)
    render :index
  end 

  def categoryIndex 
    category = Category.find(params[:category_id])
    @categoryQuestions = Category.questions.includes(:category)
    render :index
  end

  private 

  def question_params 
    params.require(:question).permit(:body, :user_id, :category_id)
  end
end