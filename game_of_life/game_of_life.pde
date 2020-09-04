int gridWidth = 600;
int gridHeight = 600;
int gridSize = 10;

boolean[] cellStates = new boolean[gridWidth / gridSize * gridHeight / gridSize];

boolean run = false;

void setup() {
  size(100, 100);
  surface.setSize(gridWidth, gridHeight);

  for (int i=0; i<cellStates.length; i++) {
    if (random(1) > .5) {
      cellStates[i] = false;
    } else {
      cellStates[i] = false;
    }
  }

  frameRate(25);
}

void keyPressed() {
  run = !run;
}

void draw() {
  background(255);
  
  int nCellsX = width / gridSize;
  int nCellsY = height / gridSize;
  
  if (mousePressed) {
    int x = floor((float) mouseX / gridSize);
    int y = floor((float) mouseY / gridSize);
    
    int index = x + y * nCellsX;
    
    cellStates[index] = true;
  }

  boolean[] initialStates = new boolean[cellStates.length];

  for (int i =0; i < initialStates.length; i++) {
    initialStates[i] = cellStates[i];
  }

  

  for (int y = 0; y < nCellsY; y ++) {
    for (int x = 0; x < nCellsX; x ++) {
      int index = x + y * nCellsX;

      boolean alive = initialStates[index];

      if (run) {
        int indexRight = (x + 1) % nCellsX + y * nCellsX;
        int indexLeft = (x - 1 + nCellsX) % nCellsX + y * nCellsX;      
        int indexBottom = x + (y + 1) % nCellsY * nCellsX;
        int indexTop = x + (y - 1 + nCellsY) % nCellsY * nCellsX;

        int indexTopLeft =
          (x - 1 + nCellsX) % nCellsX + (y - 1 + nCellsY) % nCellsY * nCellsX;
        int indexTopRight =
          (x + 1) % nCellsX + (y - 1 + nCellsY) % nCellsY * nCellsX;
        int indexBottomLeft =
          (x - 1 + nCellsX) % nCellsX + (y + 1) % nCellsY * nCellsX;
        int indexBottomRight =
          (x + 1) % nCellsX + (y + 1) % nCellsY * nCellsX;

        boolean topAlive = initialStates[indexTop];
        boolean leftAlive = initialStates[indexLeft];
        boolean rightAlive = initialStates[indexRight];
        boolean bottomAlive = initialStates[indexBottom];
        boolean topLeftAlive = initialStates[indexTopLeft];
        boolean topRightAlive = initialStates[indexTopRight];
        boolean bottomLeftAlive = initialStates[indexBottomLeft];
        boolean bottomRightAlive = initialStates[indexBottomRight];

        int nNeighboursAlive = 0;

        if (topAlive) nNeighboursAlive++;
        if (leftAlive) nNeighboursAlive++;
        if (rightAlive) nNeighboursAlive++;
        if (bottomAlive) nNeighboursAlive++;
        if (topLeftAlive) nNeighboursAlive++;
        if (topRightAlive) nNeighboursAlive++;
        if (bottomLeftAlive) nNeighboursAlive++;
        if (bottomRightAlive) nNeighboursAlive++;

        if (alive) {
          if (nNeighboursAlive == 2 || nNeighboursAlive == 3) {
            alive = true;
            cellStates[index] = true;
          } else {
            alive = false;
            cellStates[index] = false;
          }
        } else {
          if (nNeighboursAlive == 3) {
            alive = true;
            cellStates[index] = true;
          } else {
            alive = false;
            cellStates[index] = false;
          }
        }
      }

      if (alive) {
        fill(0);
      } else {
        fill(255);
      }

      stroke(255);
      rect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
}
