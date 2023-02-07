export class BluetoothMessageSender{
  send(message: Uint8Array): void{
    console.log(`Sending message with ${message.length} bytes by bluetooth`);
  }
}

export class MessagingService {
  private bluetoothMessageSender: BluetoothMessageSender;

  constructor(bluetoothMessageSender: BluetoothMessageSender) {
    this.bluetoothMessageSender = bluetoothMessageSender;
  }

  send(message: string): void {
    const buffer = Buffer.from(message, 'utf8');
    this.bluetoothMessageSender.send(buffer);
  }
}

const bluetoothMessageSender = new BluetoothMessageSender();
const messagingService = new MessagingService(bluetoothMessageSender)
messagingService.send("Dependency inversion");
