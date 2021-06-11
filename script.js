class Hamburger {
	constructor(price, calories, filler, name) {
		this.price = price;
		this.calories = calories;
		this.filler = filler;
		this.name = name;
		this.withMayo = false;
		this.withSeasoning = false;
	}

	// возвращает общую калорийность гамбургера
	calcTotalCalories() {
		let result = 0; //

		// гамбургера
		result += this.calories;

		// начинки
		result += this.filler.calories;

		// майонеза
		if (this.withMayo)
			result += 5;

		return result;
	}

	// возвращает общую стоимость
	calcTotalPrice() {
		let result = 0;

		// гамбургера
		result += this.price;

		// начинки
		result += this.filler.price;

		// майонеза
		if (this.withMayo)
			result += 20;

		// приправы
		if (this.withSeasoning)
			result += 15;

		return result;
	}

	// устанавливает начинку
	setFiller(filler) {
		this.filler = filler;
	}

	setMayo(withMayo) {
		this.withMayo = withMayo;
	}

	// устанавливает наличие приправ
	setSeasoning(withSeasoning) {
		this.withSeasoning = withSeasoning;
	}

	toString() {
		let result = `${this.name}: цена - ${this.calcTotalPrice()}, калорийность - ${this.calcTotalCalories()}, начинка - ${this.filler.name.toLowerCase()}`;

		if (this.withMayo)
			result += ', с майонезом';

		if (this.withSeasoning)
			result += ', с приправами';

		return result;
	}
}

class BigHamburger extends Hamburger {
	constructor(filler) {
		super(100, 40, filler, 'Большой гамбургер');
	}
}

class SmallHamburger extends Hamburger {
	constructor(filler) {
		super(50, 20, filler, 'Маленький гамбургер');
	}
}

class Filler {
	constructor(price, calories, name) {
		this.price = price;
		this.calories = calories;
		this.name = name;
	}
}

class CheeseFiller extends Filler {
	constructor() {
		super(10, 20, 'Сыр');
	}
}

class PotatoesFiller extends Filler {
	constructor() {
		super(15, 10, 'Картофель');
	}
}

class SaladFiller extends Filler {
	constructor() {
		super(20, 5, 'Салат');
	}
}