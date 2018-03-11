function mineColor(line, number) {
  if ( (line.match(/[aceg]/) && number % 2 === 0) ||
       (line.match(/[bdfh]/) && number % 2 !== 0) ) {
    return "white";
  } else {
    return "black";
  }
}
