let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3000";


describe('get all countries: ',()=>{
  it('should get all countries', (done) => {
  chai.request(url)
  .get('/productos')
  .end( function(err,res){
  //console.log(res)
  expect(res).to.have.status(200);
  done();
  });
  });
 });

/*
describe("Insert a country: ", () => {
  it("should insert a country", (done) => {
    chai
      .request(url)
      .post("/productos")
      .send({
        _id: "60b680a209f16295a68598d9",
        nombre: "ejemplo",
        descripcion: "ejemplo edit",
        caracteristicas: "[]",
        stock: 10,
      })
      .end(function (err, res) {
        console.log(res);
        expect(res).to.have.status(200);
        done();
      });
  });
});
*/



/*
describe("Insert a country: ", () => {
  it("should insert a country", (done) => {
    chai
      .request(url)
      .post("/productos")
      .send({
        _id: "60b680a209f16295a68598d9",
        nombre: "ejemplo",
        descripcion: "ejemplo edit",
        caracteristicas: "[]",
        stock: 10,
      })
      .end(function (err, res) {
        console.log(res);
        expect(res).to.have.status(200);
        done();
      });
  });
});
*/
