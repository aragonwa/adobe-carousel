# Flickr Carousel

Carousel uses Flickr API to pull images of Machu Picchu

[DEMO] (http://173.254.28.86/~aragonwa/adobe/)

Built with:
- Handlebars - Templating
- jQuery - DOM traversing
- Grunt - Task runner
- Font awesome - Icons

To build:
```shell
Install Node
npm install
npm install -g grunt-cli
npm grunt build
```

Features:
- Accessible
  - Use keyboard to tab through controls
  - Controls will respond to screen readers
  - Stop and start using click or keyboard
- Customize carouselSettings varible to:
 - Slide change interval
 - Number of images to pull and display
 - Title
 - Start with autorotate
