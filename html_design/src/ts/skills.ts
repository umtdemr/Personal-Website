interface SelectableArea {
  active: boolean,
  item: HTMLLinkElement,
}


class Skills{
  private wrapper: HTMLDivElement;
  private selection: HTMLDivElement;

  items: SelectableArea[] = [];
  private _position_y: number; 

  constructor(wr: HTMLDivElement){
    this.wrapper = wr;
    for (let key in wr.children){
      try {
        if(wr.children[key].classList.contains("tech_selection")){
          this.selection = wr.children[key] as HTMLDivElement;
          this.getCurrentPositionFromDiv();
        }else if(wr.children[key].classList.contains("tech_item")){
          this.items.push({
            active: wr.children[key].classList.contains("active"),
            item: wr.children[key] as HTMLLinkElement,
          });
        }
      } catch{
      }
    }

    this.addEvents();
  }

  private set position_y(pos: number){
    this._position_y = pos;
  }

  private get position_y(){
    return this._position_y;
  }

  private getCurrentPositionFromDiv(){
    let position = +getTranslateValue(this.selection).y 
    this.position_y = position;
    return position;
  }

  moveobj(pos: number) {
    this.selection.style.transform = `translateY(${pos}px)`;
  }

  addEvents(){
    this.items.forEach(selectable_item => {
      selectable_item.item.addEventListener('click', event => {
        event.preventDefault();
        console.log("tıkla bana")
      });
    });
  }

  print(){
    console.log(this.wrapper);
    console.log(this.selection);
    console.log(this.position_y);
    console.log(this.items);
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
 const matrixType = '2d'
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