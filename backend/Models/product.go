package models

import (
	"github.com/jinzhu/gorm"

	"example/web-service-gin/config"
)

var db *gorm.DB

type Product struct {
	gorm.Model
	Name     string  `gorm:""json:"name"`
	Category string  `gorm:""json:category`
	Price    float64 `gorm:""json:"price"`
	Quantity int64   `gorm:""json:"quantity"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Product{})
}

func (p *Product) CreateProduct() *Product {
	db.NewRecord(p)
	db.Create(&p)
	return p
}

func GetAllProducts() []Product {
	var Products []Product
	db.Find(&Products)
	return Products
}

func GetProductById(Id int64) (*Product, *gorm.DB) {
	var getProduct Product
	db := db.Where("ID=?", Id).Find(&getProduct)
	return &getProduct, db
}

func DeleteProduct(ID int64) Product {
	var product Product

	db.Where("ID=?", ID).Delete(product)
	return product
}
