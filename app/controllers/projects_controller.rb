class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :function, :project_description, :year, :function_description, :cover, photos: [])
  end
end


