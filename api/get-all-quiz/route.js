import { NextResponse } from "next/server";
import mysql from "mysql2";

export async function GET(request) {
	const con = mysql.createPool({
		host: "localhost",
		user: "root",
		password: "root",
		database: "classiq",
	});
    const response = await new Promise((resolve, reject) => {
        con.query(
            `SELECT * FROM quizAnswers`,
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
    return NextResponse.json({message: response})
};
