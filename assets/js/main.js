
//Пример функции и ее теста
/*
 * @param {number} x Число для возведения в степень
 * @param {number} n Показатель степени, натуральное число
 * @return {number} x в степени n
 */

function pow(x, n) {
	 if (n === 1) {
	 	return x;
	 }
	 return x *= (pow(x, n - 1));
}

describe("pow", function() {

	describe ("возводит x в степень 3", function() {
	  function makeTest(x) {
	  	var expected = x * x * x;
	  	it("возводит " + x + " в степень 3. Результат = " + expected, function(){
	  		assert.equal(pow(x, 3), expected);
	  	});
	  }
	  for (var i = 0; i < 5; i++) {
	  	makeTest(i);
	  }
	});
	
});



//Еще один пример функции и ее теста
function sum(a, b) {
	return a + b; 
}

describe("sum", function() {

  it("суммирует a и b", function() {
    assert.equal(sum(3, 5), 8);
  });

});



// Функция работы с числами (приведение с помощью унарного плюса)
// function getAndSumPrices() {
// 	var doublePrice1 = +prompt("Введите первую цену (в виде десятичной дроби)", "");
// 	var doublePrice2 = +prompt("Введите вторую цену (в виде десятичной дроби)", "");
// 	var intPrice = +prompt("Введите третью цену (в виде целого числа)", "");

// 	var sum = doublePrice1 + doublePrice2 + intPrice;
// 	alert(sum.toFixed(1));

// }
//getAndSumPrices();




//Работа с объектом
var user = {};

user.name = "Вася";
console
user.surname = "Петров";
user.name = "Петров";
delete user.name;



//Перебор свойств объекта
var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение

  //alert( "Ключ: " + key + " значение: " + menu[key] );
  //!! menu[key] - использованы квадратные скобки для доступа к значению свойства.
  //!! Если имя свойства хранится в переменной, то обратиться к свойству можно только так, а не через точку.
}



//Функция проверки объекта (пустой/непустой)
function isEmpty(obj) {
	for (var prop in obj) return false;
	return true;
}
 
describe("isEmpty", function() {

	var schedule = {};
	it("Дан пустой объект ", function() {
		assert.equal(isEmpty(schedule), true);
	});

	it("Дан НЕпустой объект ", function() {
			schedule["8:30"] = "подъем";
			assert.equal(isEmpty(schedule), false);
		});
	

});


