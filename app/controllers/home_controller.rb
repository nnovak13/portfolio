class HomeController <ApplicationController
  def index
    @video_ref= videos.sample
  end

  private
    def videos
      ["https://github.com/nnovak13/portfolio/blob/master/app/assets/images/bkg_woods.mp4?raw=true", "https://github.com/nnovak13/portfolio/blob/master/app/assets/images/bkg_ocean.mp4?raw=true","https://github.com/nnovak13/portfolio/blob/master/app/assets/images/bkg_actual_ocean.mp4?raw=true",]
    end
end
