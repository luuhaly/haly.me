# Hey Ly!

Here is a short how-to for editing your website. It takes some getting used, but I'm sure you can do it! Good luck! 😊

When you make any change, it takes around 30 seconds up to 1 minute for the change to apply.

## How to change info on the front page?

Click here: https://github.com/luuhaly/haly.me/blob/master/_config.yml

Click on the pencil on the top right and make any changes to the text within quotes "". Then click on "Commit changes" on the bottom to make the change.

Click here: https://github.com/luuhaly/haly.me/tree/master/assets/images?fbclid=IwAR2fo_XkE9Czu38OqTbZTK7r-R_te3JsGZovvaLu9fMAWXCeHv46balWsl8

You need to replace the cover.jpg image here, Click on upload files in the top right, it has to have the same name

## How to add a product?

1. Add photos

Go here: https://github.com/luuhaly/haly.me/tree/master/assets/images/projects

On the top right, choose "Add file" > "Upload files". Choose the photos or drag them on the page. Click "Commit changes" on the bottom and wait for them to upload and process. Remember the names of the files for the next step.

2. Add the product info

Go here: https://github.com/luuhaly/haly.me/tree/master/_posts/projects

Choose "Add file" > "Create new file" in the top right.

On the top, enter the name of the file. It should be something like: 2020-10-31-cactus.md
(so YEAR-MONTH-DAY-KEYWORD.md).
Below in the large blank editor, copy this (make sure to copy the whole thing):

```
---
layout: project
permalink: /:title/
category: projects

meta:
  keywords: "Cactus, Pillow"

project:
  title: "The Cactus"
  type: "Home"
  url: "https://www.sashe.sk/ha.ly"
  logo: "/assets/images/projects/cactus.jpg"
  materials: "Linen"

store:
  title: "Get on Sashe.sk"
  url: "https://www.sashe.sk/ha.ly"
  year: "2020"

images:
  - image:
    url: "/assets/images/projects/PHOTO1.jpg"
    alt: "Cactus"
  - image:
    url: "/assets/images/projects/PHOTO2.jpg"
    alt: "Cactus"
  - image:
    url: "/assets/images/projects/PHOTO3.jpg"
    alt: "Cactus"
  - image:
    url: "/assets/images/projects/PHOTO4.jpg"
    alt: "Cactus"
---
<p>
  Here goes the description of the product.
</p>
```

Then edit the text according to your product. Change the project title, type, url, photos, and so on. To change the photos, only change their file names (the last part of the file path) according to the files you uploaded in the previous step.

## How do I edit the about page?

Go here: https://github.com/luuhaly/haly.me/blob/master/about/index.html

Click on the pencil on the top right and make any changes to the HTML text.

## How do I change any info about a product?

Go here: https://github.com/luuhaly/haly.me/tree/master/_posts/projects

Click on the product that you want to modify. Click on the pencil in the top right and make any changes.
