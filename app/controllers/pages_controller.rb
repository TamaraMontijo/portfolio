class PagesController < ApplicationController
  def home
    @projects = Project.all
    @companies = Company.all
  end
end
