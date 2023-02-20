import * as mongoose from 'mongoose';

import constants from './constants';
import { Logger } from './Logger';
import { ProvideSingleton } from '../ioc';

mongoose.set('debug', Logger.shouldLog);

@ProvideSingleton(MongoDbConnection)
export class MongoDbConnection {
  public db: mongoose.Connection;
  private readonly connectionString: string = constants.mongoConnectionString;

  constructor() {
    Logger.log(`connecting to ${constants.environment} MongoDb`);
    mongoose.connect(this.connectionString);
    this.db = mongoose.connection;
    this.db.on("error", console.error.bind(console, "this.db mongo connection error: "));
    this.db.once("open", function () {
      console.log("DB Mongo Connected successfully...");
    });
  }
}
