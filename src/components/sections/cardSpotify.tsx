const SpotifyEmbed = () => {
    return (
      <div className="font-base">
        <h1 className="mb-8 text-2xl font-heading sm:text-4xl">My Playlist</h1>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/5pu2HB1gfc16XgYTuyfbbw?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  };
  
  export default SpotifyEmbed;