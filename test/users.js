let chai = require('chai'),
    chaiHttp = require('chai-http'),
    request = require('request'),
    moniker = require('moniker'),
    _ = require('underscore'),
    server = require('../app'),
    should = chai.should().equal,
    util = require('util'),
    User = require('../lib/models/user/User');

    

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    /*
    * Test the /GET route
    */
    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    /*
    * Test the /POST route
    */
    describe('/POST users', () => {
        it('it should POST an user', (done) => {
            let name = moniker.choose().split("-");;
            let user = {
                first_name : name[0],
                last_name : name[1],
                email : util.format("%s.%s@mocha-test.com", name[0], name[1]),
                password : "pass",
                timezone: "59df7a496193632964b4c14c",
                profile: "59e4dfdf830ac84b200e245d",
                language: "59df789fe6ff6e29cc39b90d",
                group: "59f3346c68d4b7357c697d10"
            }

            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.equal(true);
                    res.body.should.have.property('token');
                    done();
                });
        });
    });

    describe('/GET:id users', () => {
        it('it should GET an user by the given id', (done) => {
            let name = moniker.choose().split("-");;
            let user = new User ({
                first_name : name[0],
                last_name : name[1],
                email : util.format("%s.%s@mocha-test.com", name[0], name[1]),
                password : "pass",
                timezone: "59df7a496193632964b4c14c",
                profile: "59e4dfdf830ac84b200e245d",
                language: "59df789fe6ff6e29cc39b90d",
                group: "59f3346c68d4b7357c697d10"
            });

            user.save(function(err, user){
                chai.request(server)
                .get('/users/' + user.id)
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.equal(true);
                    res.body.should.have.property('user');
                    done();
                });
            })
        });
    });

    describe('/PUT:id users', () => {
        it('it should UPDATE an user by the given id', (done) => {
            let name = moniker.choose().split("-");
            let user = new User ({
                first_name : name[0],
                last_name : name[1],
                email : util.format("%s.%s@mocha-test.com", name[0], name[1]),
                password : "pass",
                timezone: "59df7a496193632964b4c14c",
                profile: "59e4dfdf830ac84b200e245d",
                language: "59df789fe6ff6e29cc39b90d",
                group: "59f3346c68d4b7357c697d10"
            });

            user.save(function(err, user){
                let new_name = moniker.choose().split("-");
                chai.request(server)
                .put('/users/' + user.id)
                .send({last_name : new_name[0]})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.equal(true);
                    res.body.should.have.property('user');
                    res.body.user.should.have.property('last_name').eql(new_name[0]);
                    done();
                });
            })
        });
    });
});