# Now Showing — Our Class Animations

A home menu with four collections — **Cumulative Stories**, **Learning**, **Bible** and **Others** —
each opening into a gallery of animations.

## What's in this folder

| File / folder | What it is |
|---|---|
| `index.html` | The gallery app (the home page) |
| `animations.js` | The collections and the list of animations in each |
| `animations/` | Cumulative Stories `.html` files |
| `learning/` | Learning `.html` files |
| `bible/` | Bible `.html` files (Sermon on the Mount, Parts 1–6) |
| `others/` | Others `.html` files (Animation Style Showcase) |
| `thumbs/` | Thumbnail pictures for each story |

## Putting it on GitHub Pages

1. Upload **everything in this folder** (keep all the subfolders) to a GitHub repo.
2. In the repo go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
3. After a minute your gallery is live at `https://<your-username>.github.io/<repo-name>/`.

## Adding a new animation

1. Upload the new `.html` file into the right folder:
   `animations/` (Cumulative Stories), `learning/` (Learning), `bible/` (Bible) or `others/` (Others).
   Tip: use a name with no spaces, e.g. `sam-the-lost-kite.html`.
2. Open `animations.js`, find that collection's `items: [` list and add one line
   (copy an existing line and change it):

   ```js
   { file: "sam-the-lost-kite.html", title: "The Lost Kite", author: "Sam" },
   ```

   For learning animations you can use a topic instead of an author:
   `{ file: "fractions.html", title: "Fractions", tag: "Maths" },`

3. Thumbnail (optional): if you leave `thumb` out, the gallery shows a **live mini-preview** of the animation instead.
   For a picture thumbnail, take a screenshot of the animation, save it as a `.jpg` (about 640×360) in `thumbs/`,
   and add `thumb: "thumbs/sam-the-lost-kite.jpg"` to that line.

The order of lines is the "Featured order" in each gallery. You can also add a whole new
collection by copying one of the `{ id: ..., title: ..., items: [...] }` blocks.

## Using the gallery

- The home page shows each collection; click one to open it. **Collections** (top-left of the toolbar) goes back home.

- **Views:** Grid, Slider (up/down), Coverflow, and List. Your choice is remembered.
- **Search** by story or author, **sort** by title or author, or press **Surprise me**.
- Click a story to play it full screen. **Back to stories** (or `Esc`) returns to the gallery.
  The player also has previous / restart / next / full-screen buttons.
- **Speed dial:** move the mouse and a dial peeks up from the bottom of the player. Hover over it to open it, then click
  or drag to pick 0.25× – 2× speed (or press `[` and `]`). The speed is remembered. It works once the site is online
  (e.g. GitHub Pages); browsers block it when the file is opened straight from your computer.
- Slider & Coverflow: scroll, swipe, or use the arrow keys; `Enter` to watch.
