import db_mysql from "../config/database/mysql.js";

class QueryController {
    static async compileQueries(req, res) {
        try {
            const { queries } = req.body;

            if (!queries || typeof queries !== "string") {
                return res.status(400).json({
                    success: false,
                    message: "Invalid queries provided",
                    data: null
                });
            }

            const sql_response = await db_mysql.query(queries);

            res.status(200).json({
                success: true,
                message: "SQL executed successfully",
                data: sql_response
            });
        } catch (err) {
            console.error("SQL execution error:", err); 

            res.status(500).json({
                success: false,
                message: "Internal server error",
                data: null ,
                error: err
            });
        }
    }
}

export default QueryController;

