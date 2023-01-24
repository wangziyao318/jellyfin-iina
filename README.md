# jellyfin-iina

Play jellyfin stream URL on IINA

Assume jellyfin server is installed on linux, then we locate the `web` folder and put `iina.js` in it.

```sh
cd /usr/share/jellyfin/web
sudo wget 
sudo chown root:root iina.js
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
