let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #2b95c8;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #2b95c8;"> Me divierto programando y aprendiendo... </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
