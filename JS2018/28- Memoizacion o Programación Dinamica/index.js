/*
	Función recursiva con memoización usando de ejemplo la serie Fibonacci:

	La sucesión comienza con los números 0 y 1,2​ y a partir de estos, 
	«cada término es la suma de los dos anteriores»,
	es la relación de recurrencia que la define.
*/
const fibonacci = (numero, memoria = {}) => memoria[numero] ? memoria[numero] : numero == 1 ? 0 : numero == 2 ? 1 : memoria[numero] = (fibonacci(numero - 1, memoria) + fibonacci(numero - 2, memoria));