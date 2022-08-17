package config

import (
	"fmt"
	"log"

	"github.com/jinzhu/gorm"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db *gorm.DB
)

func Connect() {
	d, err := gorm.Open("mysql", "root:<password>@/produits?parseTime=true")
	// Get a database handle.
	if err != nil {
		log.Fatal(err)
	}

	db = d
	fmt.Println("Connected!")
}

func GetDB() *gorm.DB {
	return db
}
