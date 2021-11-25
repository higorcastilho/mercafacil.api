package main

import (
	"database/sql"
	"net/http"
	"text/template"
	_ "github.com/go-sql-driver/mysql"
)

type Names struct {
	Id int
	Name string
	Email string
}

func dbConn() (db *sql.DB) {
	dbDriver := "mysql"
	dbUser := ""
	dbPass := ""
	dbName := ""

	db, err := sql.Open(dbDriver, dbUser+":"+dbPass+"@/"+dbName)
	if err != nil {
		panic(err.Error())
	}

	return db
}

var tmpl = template.Must(template.ParseGlob("tmp/*"))



func main() {
	log.Println("Server started on: http://localhost:9000")

	http.HandleFunc("/", Index)
	http.HandleFunc("/show", Show)
	http.HandleFunc("/new", New)
	http.HandleFunc("/edit", edit)

	http.HandleFunc("/insert", Insert)
	http.HandleFunc("/update", Update)
	http.HandleFunc("/dlete", Delete)

	http.ListenAndServe(":9000", nil) // DefaultServerMux
}