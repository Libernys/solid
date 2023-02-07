export interface Data {
}

export interface DataSerializer {
  serialize(data: Data): void;
}

export class JSONDataSerializer implements DataSerializer {
  serialize(data: Data): void {
    console.log("Serialized data to JSON");
  }
}

export class XMLDataSerializer implements DataSerializer {
  serialize(data: Data): void {
    console.log("Serialized data to XML");
  }
}

export class TXTDataSerializer implements DataSerializer {
  serialize(data: Data): void {
    console.log("Serialized data to TXT");
  }
}

export class CSVDataSerializer implements DataSerializer {
  serialize(data: Data): void {
    console.log("Serialized data to CSV");
  }
}

// new format
export class YAMLDataSerializer implements DataSerializer {
  serialize(data: Data): void {
    console.log("Serialized data to YAML");
  }
}
//
export enum Format {
  JSON,
  XML,
  TXT,
  CSV,
  // new format
  YAML
}

// Possible implementation with the IoC container, for example Dagger for Java
const serializers: { [Key in Format]:DataSerializer; } = {
  [Format.JSON] : new JSONDataSerializer(),
  [Format.XML] : new XMLDataSerializer(),
  [Format.TXT] : new TXTDataSerializer(),
  [Format.CSV] : new CSVDataSerializer(),
  // new format
  [Format.YAML] : new YAMLDataSerializer()
}
export interface SerializerProvider{
    getSerializer(format: Format): DataSerializer;
}

export class DataSerializerProvider implements SerializerProvider{
  getSerializer(format: Format): DataSerializer {
    return serializers[format];
  }
}

export class DataService {
  private serializerProvider: SerializerProvider;

  constructor(serializerProvider: SerializerProvider) {
    this.serializerProvider = serializerProvider;
  }
  // ....
  serialize(data: Data, format: Format): void {
      let serializer = this.serializerProvider.getSerializer(format);
      serializer.serialize(data);
  }
  // ....
}

const format: Format = Format.YAML;
const data: Data = {};
const provider = new DataSerializerProvider();
let dataManager = new DataService(provider);
dataManager.serialize(data, format);


