/* ==========================================================
   COLLECTIONS & ANIMATION LIST
   ----------------------------------------------------------
   The home page shows one big card per collection below.

   To add an animation to a collection:
   1. Put the .html file in that collection's folder
      (Cumulative Stories -> /animations, Learning -> /learning,
       Bible -> /bible, Others -> /others).
   2. Add one line to that collection's "items" list.
      - file:   the file name inside the folder
      - title:  the title shown on the card
      - author: who made it            (shows "by Name")
      - tag:    OR a topic, e.g. "Maths" (used when there's no author)
      - thumb:  (optional) a picture in /thumbs. Leave it out and
                the card shows a live mini-preview instead.
   Order of lines = "Featured order" in the gallery.
   ========================================================== */
window.COLLECTIONS = [
  {
    id: "stories",
    title: "Cumulative Stories",
    description: "Paper cut-out animations of the cumulative stories written by our class.",
    folder: "animations",
    itemWord: ["story", "stories"],
    groupLabel: "Authors",
    sortLabel: "Author A–Z",
    accent: "#f4a261",
    items: [
      { file: "bryce-the-mischief.html", title: "The Mischief", author: "Bryce", thumb: "thumbs/bryce-the-mischief.jpg" },
      { file: "elias-the-biggest-plane.html", title: "The Biggest Plane", author: "Elias", thumb: "thumbs/elias-the-biggest-plane.jpg" },
      { file: "emella-horses-wouldnt-budge.html", title: "The Horses Who Wouldn't Budge", author: "Emella", thumb: "thumbs/emella-horses-wouldnt-budge.jpg" },
      { file: "emily-the-scratch-pad.html", title: "The Scratch Pad", author: "Emily", thumb: "thumbs/emily-the-scratch-pad.jpg" },
      { file: "fynn-the-stolen-bag.html", title: "The Stolen Bag", author: "Fynn", thumb: "thumbs/fynn-the-stolen-bag.jpg" },
      { file: "jonathan-jake-and-the-hay-bale.html", title: "Jake and the Hay Bale", author: "Jonathan", thumb: "thumbs/jonathan-jake-and-the-hay-bale.jpg" },
      { file: "joshua-the-flooded-river.html", title: "The Flooded River", author: "Joshua", thumb: "thumbs/joshua-the-flooded-river.jpg" },
      { file: "lucas-a-sea-story.html", title: "A Sea Story", author: "Lucas", thumb: "thumbs/lucas-a-sea-story.jpg" },
      { file: "nathan-the-zoo-chase.html", title: "The Zoo Chase", author: "Nathan", thumb: "thumbs/nathan-the-zoo-chase.jpg" },
      { file: "olivia-classroom-disaster.html", title: "The Classroom Disaster", author: "Olivia", thumb: "thumbs/olivia-classroom-disaster.jpg" },
      { file: "regan-the-river-bridge.html", title: "The River Bridge", author: "Regan", thumb: "thumbs/regan-the-river-bridge.jpg" },
      { file: "daniel-the-big-apple-on-the-tree.html", title: "The Big Apple on the Tree", author: "Daniel", thumb: "thumbs/daniel-the-big-apple-on-the-tree.jpg" },
      { file: "eljay-fishing-story.html", title: "Tuna, Please Go on the Bait!", author: "Eljay", thumb: "thumbs/eljay-fishing-story.jpg" },
      { file: "elye-chaos-in-space.html", title: "Chaos in Space", author: "Elye", thumb: "thumbs/elye-chaos-in-space.jpg" },
      { file: "isabel-old-lady-farm-story.html", title: "The Old Lady's Busy Morning", author: "Isabel", thumb: "thumbs/isabel-old-lady-farm-story.jpg" },
      { file: "maia-hotel-tap-story.html", title: "The Tap That Wouldn't Stop", author: "Maia", thumb: "thumbs/maia-hotel-tap-story.jpg" },
      { file: "matthew-the-great-pool-drain.html", title: "The Great Pool Drain", author: "Matthew", thumb: "thumbs/matthew-the-great-pool-drain.jpg" },
      { file: "miane-tortoise-in-the-movie.html", title: "The Tortoise in the Movie", author: "Miane", thumb: "thumbs/miane-tortoise-in-the-movie.jpg" },
      { file: "shailene-the-missing-glasses.html", title: "The Missing Glasses", author: "Shailene", thumb: "thumbs/shailene-the-missing-glasses.jpg" },
      { file: "shifali-sparkle-story.html", title: "The Bottle That Would Not Budge", author: "Shifali", thumb: "thumbs/shifali-sparkle-story.jpg" },
      { file: "the-giant-turnip.html", title: "The Giant Turnip: The Big Pull", thumb: "thumbs/the-giant-turnip.jpg" },
      { file: "vera-the-christmas-star.html", title: "The Christmas Star", author: "Vera", thumb: "thumbs/vera-the-christmas-star.jpg" },
      { file: "valeria-the-stuck-door.html", title: "The Stuck Door", author: "Valeria", thumb: "thumbs/valeria-the-stuck-door.jpg" },
    ]
  },
  {
    id: "learning",
    title: "Learning",
    description: "Short animations that explain ideas in maths, science, history and more.",
    folder: "learning",
    itemWord: ["lesson", "lessons"],
    groupLabel: "Topics",
    sortLabel: "Topic A–Z",
    accent: "#8ecae6",
    items: [
      { file: "using-a-protractor.html", title: "Using a Protractor", tag: "Maths", thumb: "thumbs/using-a-protractor.jpg" },
      { file: "translation.html", title: "Translation", tag: "Maths", thumb: "thumbs/translation.jpg" },
      { file: "blue-moon-black-moon.html", title: "Blue Moon & Black Moon", tag: "Science", thumb: "thumbs/blue-moon-black-moon.jpg" },
      { file: "korea-1950-watercolor.html", title: "Korea, 1950", tag: "History", thumb: "thumbs/korea-1950-watercolor.jpg" },
    ]
  },
  {
    id: "bible",
    title: "Bible",
    description: "Interactive animations of Bible stories and teachings, starting with Jesus’ Sermon on the Mount.",
    folder: "bible",
    itemWord: ["animation", "animations"],
    groupLabel: "Series",
    sortLabel: "Series A–Z",
    accent: "#e9c46a",
    items: [
      { file: "sermon-1-the-beatitudes.html", title: "The Beatitudes", series: "Sermon on the Mount", tag: "Sermon on the Mount · Part 1", thumb: "thumbs/sermon-1-the-beatitudes.jpg" },
      { file: "sermon-2-salt-and-light.html", title: "Salt and Light", series: "Sermon on the Mount", tag: "Sermon on the Mount · Part 2", thumb: "thumbs/sermon-2-salt-and-light.jpg" },
      { file: "sermon-3-love-your-enemies.html", title: "Love Your Enemies", series: "Sermon on the Mount", tag: "Sermon on the Mount · Part 3", thumb: "thumbs/sermon-3-love-your-enemies.jpg" },
      { file: "sermon-4-the-lords-prayer.html", title: "The Lord’s Prayer", series: "Sermon on the Mount", tag: "Sermon on the Mount · Part 4", thumb: "thumbs/sermon-4-the-lords-prayer.jpg" },
      { file: "sermon-5-do-not-worry.html", title: "Do Not Worry", series: "Sermon on the Mount", tag: "Sermon on the Mount · Part 5", thumb: "thumbs/sermon-5-do-not-worry.jpg" },
      { file: "sermon-6-the-wise-and-foolish-builders.html", title: "The Wise and Foolish Builders", series: "Sermon on the Mount", tag: "Sermon on the Mount · Part 6", thumb: "thumbs/sermon-6-the-wise-and-foolish-builders.jpg" },
    ]
  },
  {
    id: "others",
    title: "Others",
    description: "Extra animations and fun bits, starting with a showcase of 10 animation styles.",
    folder: "others",
    itemWord: ["animation", "animations"],
    groupLabel: "Creators",
    sortLabel: "Creator A–Z",
    accent: "#cdb4db",
    items: [
      { file: "animation-style-showcase.html", title: "Animation Style Showcase", tag: "10 styles · 1 scene", thumb: "thumbs/animation-style-showcase.jpg" },
      // { file: "my-animation.html", title: "My Animation", author: "Name" },
    ]
  }
];
