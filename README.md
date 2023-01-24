# jellyfin-iina

Play jellyfin stream URL on IINA, inspired by [kylelv2000/jellyfin_externalplayer_iina](https://github.com/kylelv2000/jellyfin_externalplayer_iina)

Assume jellyfin server is installed on linux, then we locate the `web` folder and put `iina.js` in it.

```sh
cd /usr/share/jellyfin/web
sudo wget https://raw.githubusercontent.com/wangziyao318/jellyfin-iina/main/iina.js
```

Edit the `<head>` section of `index.html` to call the `iina.js` script.

```sh
sudo vim index.html
```

```html
<script src="./iina.js" defer></script>
```

Finally, restart jellyfin service.

```sh
sudo systemctl restart jellyfin
```
