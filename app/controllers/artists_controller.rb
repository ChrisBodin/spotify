class ArtistsController < ApplicationController
  before_action :set_billboard
  def index
    @artists = @billboard.artists
    render component: 'Artists', props: { billboard: @billboard, artists: @artists}
  end

  def show
    @artist = @billboard.artists.find(params[:id])
    render component: 'Artist', props: { billboard: @billboard, artist: @artist}
  end 

  def new
    @artist = @billboard.artists.new
    render component: 'ArtistNew', props: { billboard: @billboard, artist: @artist}
  end

  def new
    @artist = @billboard.artists.new
    render component: 'ArtistNew', props: { billboard: @billboard, artist: @artist }
  end

  def edit
    @artist = @billboard.artists.find(params[:id])
    render component: 'ArtistEdit', props: { billboard: @billboard, artist: @artist}
  end

  def create
    @artist = @billboard.artists.create(artist_params)
    if @artist.save
      redirect_to billboard_artists_path
    else
      render component: 'ArtistNew', props: { dashboard: @billboard, artist: @artist}
    end
  end

  def update
    @artist = Artist.find(params[:id])
    if @artist.update(artist_params)
      redirect_to billboard_artists_path
    else
      render component: 'ArtistEdit', props: {dashboard: @billboard, artist: @artist}
    end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to billboard_artists_path
  end


  private
  def set_billboard
    @billboard = Billboard.find(params[:billboard_id])
  end

  def artist_params
    params.require(:artist).permit( :name, :rank, :description, :image)
  end
end
