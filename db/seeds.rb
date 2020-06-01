# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

music = Category.create({id:1, name:"Music"})
animal = Category.create({id:2, name:"Animal"})
biology = Category.create({id:3, name:"Biology"})
history = Category.create({id:4, name:"History"})
world = Category.create({id:5, name:"World"})
other = Category.create({id:6, name:"Other"})