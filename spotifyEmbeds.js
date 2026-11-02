const spotifyEmbeds = [
    "https://open.spotify.com/embed/track/7gm2omqXDTaT4sS17hSu8T?utm_source=generator&si=b138fdc5d3d14194",
    "https://open.spotify.com/embed/track/6uXE1eYTnvxngLUfmuRNsu?utm_source=generator&si=fba43424fe284f02",
    "https://open.spotify.com/embed/track/0JBTKNka3Ejc8YLMRGJXmP?utm_source=generator&si=7cdd9e3fd6b34704",
    "https://open.spotify.com/embed/track/1ydXPq8Lja4OS9UlMT5a28?utm_source=generator&si=6ad181d14dce4ca0",
    "https://open.spotify.com/embed/track/2tqMaaFXWfBBsGPBChTSv7?utm_source=generator&si=5c6674b69f7f41dd"
]

function loadRandomSong() {
    const iframe = document.getElementById('spotifyPlayer')

    const randomIndex = Math.floor(
        Math.random() * spotifyEmbeds.length
    );

    iframe.src = spotifyEmbeds[randomIndex];
}

window.addEventListener('load', loadRandomSong);