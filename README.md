# jellyfin-iina

Play jellyfin stream URL on IINA (Mac only!), inspired by [kylelv2000/jellyfin_externalplayer_iina](https://github.com/kylelv2000/jellyfin_externalplayer_iina).

This is very useful in connecting jellyfin server, IINA, and SVP all together. It's lightweight since you don't need to install jellyfin-media-player. It's native on M1 Macs thanks to [IINA and SVP](https://www.svp-team.com/wiki/SVP:IINA).

## Usage

Assume jellyfin server is installed on linux, we locate the `web` folder and put `iina.js` in it. (You can search for the `web` folder if your installation is not on linux)

```sh
cd /usr/share/jellyfin/web
sudo wget https://raw.githubusercontent.com/wangziyao318/jellyfin-iina/main/iina.js
```

Add `<script src="./iina.js" defer></script>` into the `<head>` section of `index.html` to call the `iina.js` script.

```sh
sudo vim index.html
```

Finally, restart jellyfin service.

```sh
sudo systemctl restart jellyfin
```

## Known Issues

- IINA can't play a TV show or season directly but it can play single episode and movie. Navigate to an episode or movie page and then click the IINA button.
- IINA can't load external subtitle or audio tracks in this way, because external tracks are not embedded in the stream URL.
