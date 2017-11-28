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


    describe('/GET me', () => {
        it('it should GET an user by given token', (done) => {
            let name = moniker.choose().split("-");;
            let user = {
                first_name: name[0],
                last_name: name[1],
                email: util.format("%s.%s@mocha-test.com", name[0], name[1]),
                password: "pass",
                timezone: "59df7a496193632964b4c14c",
                profile: "59e4dfdf830ac84b200e245d",
                language: "59df789fe6ff6e29cc39b90d",
                group: "59f3346c68d4b7357c697d10"
            }

            // first at all, an user mut be created
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.equal(true);
                    res.body.should.have.property('token');

                    // here we got a token
                    chai.request(server)
                        .get('/auth/me')
                        .set('x-access-token', res.body.token)
                        .send(user)
                        .end((err, res) => {
                            // and we expect to get the user given only a token
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('success');
                            res.body.success.should.equal(true);
                            res.body.should.have.property('user');
                            done();
                        });
                });
        });
    });


    describe('/POST login', () => {
        it('it should POST an user', (done) => {
            let name = moniker.choose().split("-");;
            let user = {
                first_name: name[0],
                last_name: name[1],
                email: util.format("%s.%s@mocha-test.com", name[0], name[1]),
                password: "pass",
                timezone: "59df7a496193632964b4c14c",
                profile: "59e4dfdf830ac84b200e245d",
                language: "59df789fe6ff6e29cc39b90d",
                group: "59f3346c68d4b7357c697d10"
            }

            // first at all, an user mut be created.
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.success.should.equal(true);
                    res.body.should.have.property('token');

                    chai.request(server)
                        .post('/auth/login')
                        .send({email: user.email, password: user.password})
                        .end((err, res) => {
                            // and we expect to get the user given only a token
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('auth');
                            res.body.auth.should.equal(true);
                            res.body.should.have.property('token');
                            done();
                        });
                });
        });
    });
});
