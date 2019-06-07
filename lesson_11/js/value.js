// Мой вариант: (вариант автора конечно лучше)

class options {
  constructor(height, width, backgroundColor, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.backgroundColor = backgroundColor;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  makeDiv(text = 'Пользователь ничего не ввел') {
    let div = document.createElement('div'); // именно внутри нужно создавать, иначе он будет просто переопределяться
    document.body.appendChild(div);
    div.textContent = text;
    div.style.height = this.height;
    div.style.width = this.width;
    div.style.backgroundColor = this.backgroundColor;
    div.style.fontSize = this.fontSize;
    div.style.textAlign = this.textAlign;
  }
}

const addDiv = new options('70px', '70px', 'blue', '15px', 'center');
const addDivDouble = new options('100px', '100px', 'yellow', '20px', 'center');
addDiv.makeDiv('Working...');
addDivDouble.makeDiv();

// вариант автора:

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
	}
}

const item = new Options(300, 350, "red", 14, "center");

item.createDiv();