export interface Data {

}

export enum Format {
  JSON,
  XML,
  TXT,
  CSV
}
export class DataService {
  private _serializer = new DataSerializer();

  // ....
  serialize(data: Data, format: Format): void {
    switch (format) {
      case Format.JSON:
        this._serializer.serializeJSON(data);
        break;
      case Format.XML:
        this._serializer.serializeXML(data);
        break;
      case Format.TXT:
        this._serializer.serializeTXT(data);
        break;
      case Format.CSV:
        this._serializer.serializeCVS(data);
        break;
    }
  }

  // ....
}
export class DataSerializer {
  serializeJSON(data: Data): void {
    console.log("Serialized data to JSON");
  }

  serializeXML(data: Data): void {
    console.log("Serialized data to XML");
  }

  serializeTXT(data: Data): void {
    console.log("Serialized data to TXT");
  }

  serializeCVS(data: Data): void {
    console.log("Serialized data to CSV");
  }
}


const format: Format = Format.JSON;
const data: Data = {};
let dataManager = new DataService();
dataManager.serialize(data, format);





