class Skills{
  private wrapper: HTMLDivElement;
  private selection: HTMLDivElement;
  private position_y: number; 

  constructor(wr: HTMLDivElement){
    this.wrapper = wr;
    for (let key in wr.children){
      try {
        if(wr.children[key].classList.contains("tech_selection")){
          this.selection = wr.children[key] as HTMLDivElement;
        }
      } catch {
        
      }
    }
  }


  private getCurrentPositionFromDiv(){
    return getTranslateValue(this.selection).y;
  }
  moveobj(pos: number) {
    this.selection.style.transform = `translateY(${pos}px)`;
  }

  print(){
    console.log(this.wrapper);
    console.log(this.selection);
    console.log(this.getCurrentPositionFromDiv());
  }
}


function getTranslateValue(element: HTMLElement) {
  const style = window.getComputedStyle(element)
  const matrix = style['transform'];

  // No transform property. Simply return 0 values.
  if (matrix === 'none') {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  }

 // Can either be 2d or 3d transform
 const matrixType = matrix.includes('3d') ? '3d' : '2d'
 const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

 // 2d matrices have 6 values
 // Last 2 values are X and Y.
 // 2d matrices does not have Z value.
 if (matrixType === '2d') {
  return {
    x: matrixValues[4],
    y: matrixValues[5],
    z: 0
  }
 }

 // 3d matrices have 16 values
         // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14]
    }
  }
}