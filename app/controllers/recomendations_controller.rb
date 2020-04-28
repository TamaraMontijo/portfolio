class RecomendationsController < ApplicationController
  def index
    @Recomendations = Recomendation.all
  end
end
