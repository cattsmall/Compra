if(Meteor.isClient){Template.hello.greeting=function(){return"Welcome to app."};Template.hello.events({"click input":function(){typeof console!="undefined"&&console.log("You pressed the button")}})}Meteor.isServer&&Meteor.startup(function(){});