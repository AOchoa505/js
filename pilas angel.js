class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
      console.log(`Elemento agregado: ${item}`);
    }
  
    pop() {
      if (this.items.length > 0) {
        let item = this.items.pop();
        console.log(`Elemento eliminado: ${item}`);
        return item;
      } else {
        console.log("La pila está vacía");
        return null;
      }
    }
  
    peek() {
      if (this.items.length > 0) {
        return this.items[this.items.length - 1];
      } else {
        console.log("La pila está vacía");
        return null;
      }
    }
  
    size() {
      return this.items.length;
    }
  }
  
  let stack = new Stack();
  
  while (true) {
    console.log("Opciones:");
    console.log("1. Agregar elemento");
    console.log("2. Eliminar elemento");
    console.log("3. Ver elemento superior");
    console.log("4. Ver tamaño de la pila");
    console.log("5. Salir");
  
    let option = prompt("Ingrese una opción: ");
  
    switch (option) {
      case "1":
        let item = prompt("Ingrese el elemento a agregar: ");
        stack.push(item);
        break;
      case "2":
        stack.pop();
        break;
      case "3":
        let topItem = stack.peek();
        if (topItem) {
          console.log(`Elemento superior: ${topItem}`);
        }
        break;
      case "4":
        console.log(`Tamaño de la pila: ${stack.size()}`);
        break;
      case "5":
        console.log("Saliendo...");
        return;
      default:
        console.log("Opción inválida");
    }
  }