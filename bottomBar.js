function bottomBarCheck(SmileFace) {
  if (
    SmileFace.y+SmileFace.ray >= BottomBar.bottomYPosition &&
    SmileFace.y+SmileFace.ray <= limitBottom &&
    SmileFace.x+SmileFace.ray > mouseX - Math.round(BottomBar.width / 2) &&
    SmileFace.x-SmileFace.ray < mouseX + Math.round(BottomBar.width / 2)
  ) {
    return -1;
  }
  return SmileFace.sensY;
}

function bottomBar() {
  // color
  fill(BottomBar.color);
  rect(
    mouseX - Math.round(BottomBar.width / 2),
    BottomBar.bottomYPosition,
    BottomBar.width,
    BottomBar.height
  );
}
