class Queue {
    constructor() {
      this.items = [];
    }
  
    
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift();
    }
  
    
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  

    print() {
      console.log(this.items);
    }
  }
  
 
  let queue = new Queue();
  
  
  function interactWithQueue() {
    console.log("Cola actual:");
    queue.print();
  
    console.log("¿Qué deseas hacer?");
    console.log("1. Agregar elemento a la cola");
    console.log("2. Remover elemento de la cola");
    console.log("3. Verificar si la cola está vacía");
    console.log("4. Mostrar tamaño de la cola");
    console.log("5. Salir");
  
    let choice = prompt("Ingresa una opción (1-5): ");
  
    switch (choice) {
      case "1":
        let element = prompt("Ingresa el elemento a agregar: ");
        queue.enqueue(element);
        interactWithQueue();
        break;
      case "2":
        if (!queue.isEmpty()) {
          console.log(`Removiendo elemento: ${queue.dequeue()}`);
        } else {
          console.log("La cola está vacía");
        }
        interactWithQueue();
        break;
      case "3":
        console.log(`La cola está vacía: ${queue.isEmpty()}`);
        interactWithQueue();
        break;
      case "4":
        console.log(`Tamaño de la cola: ${queue.size()}`);
        interactWithQueue();
        break;
      case "5":
        console.log("Adiós!");
        break;
      default:
        console.log("Opción inválida. Intenta de nuevo.");
        interactWithQueue();
    }
  }
  
 
  interactWithQueue();