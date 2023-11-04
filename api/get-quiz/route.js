import { NextResponse } from "next/server";
import mysql from "mysql2";

export async function GET(request) {
	return NextResponse.json({response: "hello"})
}

export async function POST(request) {
	const con = mysql.createPool({
		host: "localhost",
		user: "root",
		password: "root",
		database: "classiq",
	});
    const {quizTitle} = await request.json()
    const response = await new Promise((resolve, reject) => {
        con.query(
            `SELECT * FROM quizAnswers WHERE name='${quizTitle}'`,
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });

    console.log(response);
    return NextResponse.json({message: response})
};
