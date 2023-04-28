const POEMS = 10;

// zf 11
const titles = [
    "Home (Haiku 1)",
    "Alarm (Haiku 2)",
    "Presentation (Haiku 3)",
    "MacOS (Haiku 4)",
    "Programming (Haiku 5)",
    "Testing (Haiku 6)",
    "Hidden Inside (Forced Simile)",
    "Trees (Concrete Poem)",
    "The Last Position (Apology Poem)",
    "Silence (Found Poem)"
];

// zf 118
const texts = [
    `
This is where I live
as well as my family
Often annoying
    `,
    `
Necessary friend
Reminds me when I need it
Almost smashed again
    `,
    `
I prepared for this
I know that I will do well
Lost information
    `,
    `
Really is gorgeous
Allows productivity
Missing most software
    `,
    `
Building new ideas
I spend all my time on this
Failing to compile
    `,
    `
Just skipped studying
I hope I answer correct
Good luck, please arrive
    `,
    `
My thoughts of pursuing my dream were sealed,
not unlike the water in a big bottle.
At first the bottle was overflowing,
my hope and aspirations active.

                           Slowly it drained,
              as if the bottle sprung a leak.
I shut the lid,
in an effort to conserve the water.
It was supposedly a success,
     although a large sacrifice was required.
It may have been beneficial at the time,
                 but it was a terrible trade.

With the lid shut closed,
and ideas long locked in,
   I do not know when I will open them again.
    `,
    `
                    The
                  sound of
                 the leaves
               rustling as the
            breeze passes by. The
         bright, vivid colors which
     will soon turn brown and fall. The
             leaves are starting
             to wither as summer
         is coming to an end. I look
       at the tree again, only to see
   myself in the past. The calming green
leaves are becoming scarce. As I think back
                 to when the
                 leaves were
               still green, I
                 take myself
                   back to
              elementary school,
                middle school.
                 Now I am in
                 high school.
    `,
    `
I’m sorry for taking
the last position,
The very last one.
I know you have
wanted the position
for a very very long time.

I got lucky and
my application
came through faster.

I think you should
apply        again
next          year.

I won’t be
your competition
because
I won’t go again.
    `,
    `
The icy silence I hear,
with nothing left all night long.
I carry your heart from the earth,
yet in these thoughts
I might sell your love for peace.
I hope you don’t mind,
if I carry your heart with me.

In disgrace with fortune and men’s eyes,
I love you as one loves obscure things.

Even as I speak,
I don’t know any more ways to love.

      I all alone rise and sink,
  I shall love thee better after death.

I’d wake and hear the cold splintering,
               breaking.
          I said, I love you.
           You said, nothing.
    `
];

class Poem {

    constructor(title, text, center) {

        this.title = title;
        this.text = text;
        this.center = center;

    }

}

const title = document.getElementById("poem-title");
const text = document.getElementById("poem-text");
const poems = [];

for (let i = 0; i < 10; i++) {
    poems.push(new Poem(titles[i], texts[i]));
}

let index = 0;

function display() {

    title.innerText = poems[index].title;
    text.innerText = poems[index].text;

    if (index < 6) {
        text.style.textAlign = "center";
    } else {
        text.style.textAlign = "left";
    }

}

function changeIndex(increment) {

    if ((increment == -1 && index == 0) || (increment == 1 && index == POEMS - 1)) {
        return;
    }

    index += increment;

    display();

}

display();
