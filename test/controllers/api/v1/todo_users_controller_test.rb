require 'test_helper'

class Api::V1::TodoUsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_v1_todo_user = api_v1_todo_users(:one)
  end

  test "should get index" do
    get api_v1_todo_users_url, as: :json
    assert_response :success
  end

  test "should create api_v1_todo_user" do
    assert_difference('Api::V1::TodoUser.count') do
      post api_v1_todo_users_url, params: { api_v1_todo_user: { is_complete: @api_v1_todo_user.is_complete, item: @api_v1_todo_user.item, user_id: @api_v1_todo_user.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show api_v1_todo_user" do
    get api_v1_todo_user_url(@api_v1_todo_user), as: :json
    assert_response :success
  end

  test "should update api_v1_todo_user" do
    patch api_v1_todo_user_url(@api_v1_todo_user), params: { api_v1_todo_user: { is_complete: @api_v1_todo_user.is_complete, item: @api_v1_todo_user.item, user_id: @api_v1_todo_user.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy api_v1_todo_user" do
    assert_difference('Api::V1::TodoUser.count', -1) do
      delete api_v1_todo_user_url(@api_v1_todo_user), as: :json
    end

    assert_response 204
  end
end
