var nock = require('nock');
var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
chai.use(require('sinon-chai'));

var Drug = require('../../../lib/drug/Drug');

describe('Drug', function() {
	var subject;
	var log;

	before(function () {
		nock.disableNetConnect();
	});

	beforeEach(function () {
		log = {};
		subject = new Drug(log, {
			"gtin": "03411112112715",
			"name": "Buprenorphine",
			"doseRate": 0.2,
			"concentration": 0.3
		});
	});

	describe('#constructor', function() {
		it('successfully stores inputs', function() {
			expect(subject.name).to.equal('Buprenorphine');
			expect(subject.doseRate).to.equal(0.2);
			expect(subject.concentration).to.equal(0.3);
			expect(subject.log.object).to.be.equal('Drug');
		});
	});

	describe('#calculateDose', function () {
		it('calculates correct dose', function() {
			log.info = sinon.spy();
			var dose = subject.calculateDose(4);
			expect(dose).to.equal(2.666666666666667);
			expect(log.info).to.be.calledWith('calculateDose', 'Calculating dose for Buprenorphine for animal with weight 4');
		});

	});

	after(function () {
		nock.enableNetConnect();
	});
});