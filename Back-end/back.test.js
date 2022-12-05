
const supertest = require('supertest')
const app =require ('./server')


    //**************************  register ************************************** */

    describe("POST api/auth/register",() =>{

      
      describe("creat user 🤗", () =>{
          it("should respond with a 400 status code",async () =>{
              const response = await supertest(app).post("/api/auth/register").send({
                  name:"DFGHJK",
                  email:"bouamghkjoud@gmail.com",
                  password:"123456",
                  role:"client"
              })
              expect(response.statusCode).toBe(400)
          })
      })
  
      describe("Please ADD All Fields", () =>{
  
          it("Please ADD All Fields",async () =>{
              const response = await supertest(app).post("/api/auth/register").send({
                name: "",
                email: "",
                password: "",
                role:""
              })
              expect(response.statusCode).toBe(400)
          })
      })

      describe("User already exists", () =>{
  
        it("User already exists",async () =>{
            const response = await supertest(app).post("/api/auth/register").send({
              name:"DFGHJK",
              email:"bouamghkjoud@gmail.com",
              password:"123456",
              role:"client"
            })
            expect(response.statusCode).toBe(400)
        })
    })

      
      })
      //**************************  Loginn  ************************************** */
describe("POST api/auth/login",() =>{

  describe("Invalid Email Or Password", () =>{
    it("should res with a 400 status code",async () =>{
        const response = await supertest(app).post("/api/auth/login").send({
            email:"saidaa@gmail.com",
            password:"00000"
        })
        expect(response.statusCode).toBe(400)
    })
    })

  describe("your login was successful 🤗🤗", () =>{

    it("should res with a 201 status code",async () => {
        const response = await supertest(app).post("/api/auth/login").send({
            email:"bouamghkjoud@gmail.com",
            password:"123456"
        })
        expect(response.statusCode).toBe(201)
    })
    })


    
    })