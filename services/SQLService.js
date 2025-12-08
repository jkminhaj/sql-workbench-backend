class SQLService {
  static showDatabases = "SHOW DATABASES;";
  static showTables = (db) => `SHOW TABLES FROM ${db};`;
  static describeTable = (table) => `DESCRIBE ${table};`;
  static createTable = (table, columns) => `CREATE TABLE ${table} (${columns});`;
  static insert = (table, cols, values) => `INSERT INTO ${table} (${cols}) VALUES (${values});`;
  static select = (table, condition="") => `SELECT * FROM ${table} ${condition};`;
  static update = (table, set, condition) => `UPDATE ${table} SET ${set} WHERE ${condition};`;
  static delete = (table, condition) => `DELETE FROM ${table} WHERE ${condition};`;
}
export default SQLService;
