# ZIM.VWallet

## Requerimientos iniciales

#### 1. Usuario
  - - [ ] 1.1 Se debe poder definirse un usario con los datos típicos de una persona física y siempre tiene que estar vinculado a un fondo
  - - [ ] 1.2 Se debe poder darse de alta un usuario
  - - [ ] 1.3 Se debe poder bloquear y desbloquear un usuario
  - - [ ] 1.4 La aplicación debe permitir visualizar los datos del usuario, y editar todos, menos los datos únicos como CVU o DNI
  - - [ ] 1.5 Cada usuario puede conocer a otros usuarios, agregándolos a su lista de conocidos, eliminarlos, y asignarles un alias personalizado para su identificación en la lista de conocidos
  - - [ ] 1.6 Cada usuario debe contar con un estado bancario "común" cuando no tiene números en rojo, y "deudor" en caso contrario
  - - [ ] 1.7 Cada usuario debe contar con una lista de notificaciones la cuál indica los diferentes eventos relacionados con lass acciones del usuario (transacciones salientes, modificaciones de datos, etc) u otros como transacciones entrantes

#### 2. Visualización de saldo y transacciones: La aplicación debe mostrar el saldo actual y las transacciones realizadas en tiempo real.
- 2.1 Fondo de saldo con transacciones: 
  - - [ ] 2.1.1 Fondo:
    - - [ ] 2.1.1.1 Debe identificarse por un CVU
    - - [ ] 2.1.1.2 Debe estar vinculado a una persona física
    - - [ ] 2.1.1.3 Debe contener un saldo y un historial de transacciones
  - - [ ] 2.1.2 Saldo:
    - - [ ] 2.1.2.1 Debe permitir ser restado y sumado
    - - [ ] 2.1.2.2 Debe permitir ser visible u oculto
  - - [ ] 2.1.3 Transacción:
    - - [ ] 2.1.3.1 Debe imprimir el origen y destino (ambos CVU), fecha de programación y ejecución, monto y descripción
  - - [ ] 2.1.4 Lista de Transacciones:
    - - [ ] 2.1.4.1 Debe imprimir la lista de transacciones
    - - [ ] 2.1.4.2 Debe permitir al usuario filtrar sus transacciones por fecha, categoría y tipo
    - - [ ] 2.1.4.3 Debe ofrecer funciones matemáticas tales como promedio, mayor y menor transacción, cantidad de transacciones en el tiempo, cantidad de transacciones por destino (en el caso de salientes) y orígen (en el caso de entrantes), siempre teniendo en cuenta el posible filtro definido por el usuario

  - - [ ] 2.2 Gráficos y estadísticas: La aplicación debe proporcionar gráficos y estadísticas detalladas sobre el uso del saldo y las transacciones, para ayudar al usuario a tener una mejor comprensión de sus gastos y ahorros.
    - - [ ] 2.2.1 Gráficos estadísticos:
      - 2.2.1.1 Debe imprimir los cálculos matemáticos ofrecidos por la lista de transacciones (2.1.4.3) representándolos con gráficos tales como "polígono de frecuencias", "diagrama de disperción", "ojiva" etc. Fuente: [Tipos de gráficoss estadísticos](https://www.probabilidadyestadistica.net/tipos-de-graficos-estadisticos/#histograma)

#### 3. Exportación de datos:
  - - [ ] 3.1 La aplicación debe permitir a los usuarios exportar sus transacciones y estadísticas a diferentes formatos, comoo CSV, Excel, PDF, etc., para su uso posterior.

#### 4. Integración con otras entidades bancarias:
  - - [ ] 4.1 La aplicación debe permitir realizar transacciones con cuentas de personas físicas hacia billeteras virtuales de otras entidades bancarias
  - - [ ] 4.2 La aplicación debe permitir recibir transacciones de personas físicas desde billeteras virtuales de otras entidadess bancarias

#### 5. Pagos en línea:
  - - [ ] 5.1 La aplicación debe permitir al usuario realizar pagos en línea de forma fácil y segura:
  - - [ ] 5.1.1 Se debe permitir realizar pagos mediante código QR
   - 5.1.2 Se debe permitir realizar pagos mediante ALIAS

#### 6. Seguridad:
  - - [ ] La aplicación debe ser segura y proteger la información y el dinero del usuario.

#### 7. Notificaciones en tiempo real:
  - - [ ] 7.1 La aplicación debe enviar notificaciones en tiempo real sobre transacciones y otros eventos relacionados.
  - - [ ] 7.1.1 Se debe notificar vía mail
   - 7.1.2 Se debe notificar en la misma aplicación mediante la lista de notificaciones propia de la aplicación

#### 8. Integración de métodos de pago:
  - - [ ] 8.1 La aplicación debe integrar diferentes métodos de pago
    - - [ ] 8.1.1 Se debe permitir ingresar dinero a traves de tarjetas de débito y billeteras electrónicas