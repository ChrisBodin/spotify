class BillboardsController < ApplicationController
  def index
    render json: Billboard.all
  end

  def show
    @billboard = Billboard.find(params[:id])
    render component: 'Billboard', props: { billboard: @billboard }
  end

  def new
    @billboard = Billboard.find(params[:id])
    render component: 'Billboard', props: { billboard: @billboard }
  end

  def create
    @billboard = Billboard.new(sub_params)
    if @billboard.save
      redirect_to billboards_path
    else
      render component: 'BillboardNew', props: { billboard: @billboard }
    end
  end

  def edit
    @billboard = Billboard.find(params[:id])
    render component: 'BillboardEdit', props: { billboard: @billboard }
  end

  def update
    @billboard = Billboard.find(params[:id])
    if @billboard.update(billboard_params)
      redirect_to billboards_path
    else
      render component: 'BillboardEdit', props: { billboard: @billboard }
    end
  end

  def destroy
    @billboard = Billboard.find(params[:id])
    @billboard.destroy
    redirect_to billboards_path
  end

  private 
    def billboard_params
      params.require(:billboard).permit(:name, :description, :image)
    end

end
