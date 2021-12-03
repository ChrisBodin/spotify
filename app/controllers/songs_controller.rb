class SongsController < ApplicationController
  def index
    render json: @artist.songs.all
  end

  def show
    @song = @artist.songs.find(params[:id])
    render component: 'Song', props: { song: @song, artist: @artist  }
  end

  def new
    @song = @artist.songs.new
    render component: 'SongNew', props: { song: @song, artist: @artist  }
  end

  def edit
    @song = @artist.songs.find(params[:id])
    render component: 'SongEdit', props: { song: @song, artist: @artist  }
  end
  
  def create
    @song = artists.songs.new(song_params)
    if @song.save
      redirect_to artists_path
    else
      render component: 'SongNew', props: { song: @song, artist: @artist }
    end
  end

  def update
    @song = @artist.songs.find(params[:id])
    @song.destroy
    redirect_to artists_path
  end

  private 
    def set_artist
      @artist = Artist.find(params[:artist_id])
    end
