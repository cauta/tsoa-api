import { expect } from 'chai';
import { stub } from 'sinon';

import { Logger } from '../../../config/Logger';

describe('Logger', () => {
  const exampleInput = { a: 1 };
  const exampleOutput = (Logger as any).formatArgs(exampleInput);
  // let debug  : any = Logger.console.debug;
  const debugStub = stub(Logger.console, "debug");
  const warnStub = stub(Logger.console, "warn");
  const errorStub = stub(Logger.console, "error");
  const infoStub = stub( Logger.console, "info");
  const verboseStub = stub( Logger.console, "verbose");
  before(() => {
    (Logger as any).shouldLog = true;
  });

  it('should log "log"', () => {
    Logger.log(exampleInput);
    expect(debugStub.calledWith(exampleOutput)).to.be.true; // tslint:disable-line
  });

  it('should log "warn"', () => {
    Logger.warn(exampleInput);
    expect(warnStub.calledWith(exampleOutput)).to.be.true; // tslint:disable-line
  });

  it('should log "error"', () => {
    Logger.error(exampleInput);
    expect(errorStub.calledWith(exampleOutput)).to.be.true; // tslint:disable-line
  });

  it('should log "verbose"', () => {
    Logger.verbose(exampleInput);
    expect(verboseStub.calledWith(exampleOutput)).to.be.true; // tslint:disable-line
  });

  it('should log "info"', () => {
    Logger.info(exampleInput);
    expect(infoStub.calledWith(exampleOutput)).to.be.true; // tslint:disable-line
  });
});
