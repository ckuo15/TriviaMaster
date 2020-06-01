class Api::AnswersController < ApplicationController
  def create
    @answer = Answer.new(answer_params)
    if @answer.save!
      render :show
    else 
      render json: @answer.errors.full_messages, status:401
    end
  end 

  def show
    Answer.find_by(params[:id])
  end 

  def index
    question = Question.find(params[:question_id])
    @answers = question.answers.includes(:question)
    render :index
  end 

  private

  def answer_params 
    params.require(:answer).permit(:question_id, :body)
  end
end