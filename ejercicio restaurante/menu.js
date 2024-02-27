 let menu = {
      "Hamburguesas con papas": 5,
      "Tacos de Birria": 7,
      "Nachos": 4,
      "Bebidas de industria la constancia": 2
    };

    function mostrarMenu() {
      let tablaMenu = document.getElementById("menu");
      for (let plato in menu) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${plato}</td><td>$${menu[plato]}</td>`;
        tablaMenu.appendChild(fila);
      }
    }

    function agregarPedido() {
      let plato = document.getElementById("plato").value;
      let cantidad = parseInt(document.getElementById("cantidad").value);

      if (!menu.hasOwnProperty(plato)) {
        alert("Lo siento, el plato no está en el menú.");
        return;
      }

      let tablaPedidos = document.getElementById("pedidos");
      let filaPedido = document.createElement("tr");
      filaPedido.innerHTML = `<td>${plato}</td><td>${cantidad}</td><td>En cocina</td>`;
      tablaPedidos.appendChild(filaPedido);
    }

    mostrarMenu();