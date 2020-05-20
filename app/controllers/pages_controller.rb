class PagesController < ApplicationController
  def home
    @projects = Project.all
    @companies = Company.all
    @recommendations = Recommendation.all
  end
end
