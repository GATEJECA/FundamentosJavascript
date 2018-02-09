/*
	Función recursiva usando de ejemplo la serie Fibonacci:

	La sucesión comienza con los números 0 y 1,2​ y a partir de estos, 
	«cada término es la suma de los dos anteriores»,
	es la relación de recurrencia que la define.
*/
function fibonacci(num){
	if (num <= 0) return 0;
	else if (num == 1) return 1;
	else return fibonacci(num - 1) + fibonacci(num - 2);
}