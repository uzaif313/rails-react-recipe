class Api::V1::TodoUsersController < ApiOriginController
  before_action :set_todo_user, only: [:show, :update, :destroy]
  before_action :authenticate_user
  # GET /api/v1/todo_users
  def index
    @todo_users = TodoUser.all

    render json: @todo_users
  end

  # GET /api/v1/todo_users/1
  def show
    render json: @todo_user
  end

  # POST /api/v1/todo_users
  def create
    @todo_user = current_user.todo_users.build(todo_user_params)

    if @todo_user.save
      render json: @todo_user, status: :created, location: @todo_user
    else
      render json: @todo_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/todo_users/1
  def update
    if @todo_user.update(todo_user_params)
      render json: @todo_user
    else
      render json: @todo_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/todo_users/1
  def destroy
    @todo_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo_user
      @todo_user = TodoUser.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def todo_user_params
      params.require(:todo_user).permit(:item, :is_complete)
    end
end
