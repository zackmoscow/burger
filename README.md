# burger

## server.js
- sets up express and handlebars
- establishes routes and initiates app.listen

## orm.js
- sets up "helper" function for converting objects to sql-friendly format
- sets up 3 mysql queries (for view all, add burger, and update devoured)

## burger.js
- aligns burgers_controller.js inputs with orm queries

## burgers_controller.js
- sets routes for all query fxns and passes through the necessary data for their proper execution

## burger.js
- assigns event listener, establishes variables, and initiates AJAX request for all query fxns

## schema.sql and seeds.sql
- this should be self-explanatory

## handlebars
- these files establish dynamically generated HTML content, used burger-block for fun

