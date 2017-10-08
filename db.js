var KnexMigrator = require('knex-migrator');
var knexMigrator = new KnexMigrator({
	    knexMigratorFilePath: __dirname
});

knexMigrator.init();
// knexMigrator.migrate();

// check your database health 
/*
knexMigrator.isDatabaseOK()
  .then(function() {
     // database is OK
  })
  .catch(function(err) {
     // err contains a specific code, based on that code you decide (err.code)
     
     // database is not initialised?
     knexMigrator.init();
     
     // database is not migrated?
     knexMigrator.migrate();
  });
*/
