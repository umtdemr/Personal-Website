interface SelectableArea {
  index: number,
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
    let index = 0;
    for (let key in wr.children){
      try {
        if(wr.children[key].classList.contains("tech_selection")){
          this.selection = wr.children[key] as HTMLDivElement;
          this.getCurrentPositionFromDiv();
        }else if(wr.children[key].classList.contains("tech_item")){
          this.items.push({
            index: index,
            active: wr.children[key].classList.contains("active"),
            item: wr.children[key] as HTMLLinkElement,
          });
          index++;
        }
      } catch{
      }
    }

    this.addEvents();
    this.initialAction();
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

  private calculatePercentOfSpan(width: number): number{
    const percent = (width * 100) / this.wrapper.offsetWidth;
    return Math.floor(percent);
  };

  private initialAction() {
    this.moveobj(0);
    const firstElementWidth = this.items[1].item.querySelector("span").offsetWidth;
    console.log(firstElementWidth);
    this.setMaxWidth(
      this.calculatePercentOfSpan(firstElementWidth + 13)
    );
  }

  moveobj(pos: number) {
    this.selection.style.transform = `translateY(${pos}%)`;
  }

  setMaxWidth(width: number){
    this.selection.style.maxWidth = `${width}%`;
  }

  addEvents(){
    this.items.forEach(selectable_item => {
      let item = selectable_item.item;
      item.addEventListener('click', event => {
        event.preventDefault();
        let selected_index = selectable_item.index;
        let position = selected_index * 100;
        this.moveobj(position);
        this.addActiveToSelected(selected_index);

        const spanWidth = item.querySelector("span").offsetWidth;
        const selectionNewWidth = this.calculatePercentOfSpan(spanWidth);
        this.setMaxWidth(selectionNewWidth);
          
      });
    });
  }

  
  removeActiveClass(){
    this.items = this.items.map(selectable_item => {
      let item = selectable_item.item;
      item.classList.remove("active");
      return {index: selectable_item.index, active: false, item: item};
    });
  }

  addActiveToSelected(index: number){
    this.removeActiveClass();
    let selectable_item = this.items[index];
    selectable_item.item.classList.add("active");
    selectable_item.active = true;
    this.items[index] = selectable_item;
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