require 'test_helper'

class RecomendationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get recomendations_index_url
    assert_response :success
  end

end
