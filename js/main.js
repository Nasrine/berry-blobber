// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################


// Write your function here, name it `writeBerries`
var listBerries = fuction (berry){
  document.write('<h1>Berries</h1>');

  berries. forEach(fuction (item){
  document.write ('<h2>' + item.name + '</h2>');
  document.write ('<dl>');
  document.write ('<img src="images/' + berry.img + 'alt="">');
  document.write ('<dt>latin</dt>');
  document.write ('<dd></dd>');
  document.write ('<dt>onShrub</dt>');
  document.write ('<dd></dd>');
  document.write ('<dt>carbs</dt>');
  document.write ('<dd></dd>');
  document.write ('<dt>protein</dt>');
  document.write ('<dd></dd>');
  document.write ('</dl>');

}
);
// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
