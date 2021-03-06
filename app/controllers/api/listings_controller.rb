class Api::ListingsController < ApplicationController
  CITY_HASH = {
    "San Francisco": {northEast: {lat: 37.815173, lon:-122.385187}, southWest: {lat: 37.708688, lon: -122.506505}}
  }
  
  def index
    if params[:category]
      @listings = Listing.all.first(6)
      render :index
      # Change this to a different render jbuilder in the future for faster querying
    else
      @listings = Listing.all.includes(:photos)
      render :index
    end
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def search
    bounds = CITY_HASH[params[:search].to_sym]
    @listings = bounds ? Listing.in_bounds(bounds) : Listing.all.includes(:photos)
  # @listings = Listing.all.includes(:photos) if params[:search] == 'discover'

    if @listings
      render :index
    else
      render json: ['No search results', 'Please try another location']
    end
  end
end


