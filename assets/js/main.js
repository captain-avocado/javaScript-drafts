
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


function sum(a, b) {
	return a + b; 
}


describe("sum", function() {

  it("суммирует a и b", function() {
    assert.equal(sum(3, 5), 8);
  });

});

function getAndSumPrices() {
	var doublePrice1 = +prompt("Введите первую цену (в виде десятичной дроби)", "");
	var doublePrice2 = +prompt("Введите вторую цену (в виде десятичной дроби)", "");
	var intPrice = +prompt("Введите третью цену (в виде целого числа)", "");

	var sum = doublePrice1 + doublePrice2 + intPrice;
	alert(sum.toFixed(1));

}

getAndSumPrices();





