//This should not be confused with the idea that the values they refer to are immutable.
const numLivesForCat = 9;
const kitty = {
  name: 'Aurora',
  numLives: numLivesForCat,
};
// Error
kitty = {
  name: 'Danielle',
  numLives: numLivesForCat,
};
// all "okay"
kitty.name = 'Rory';
kitty.name = 'Kitty';
kitty.name = 'Cat';
kitty.numLives--;
