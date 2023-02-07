export interface MessageSender {
  send(message: Uint8Array): void;
}

export class MessagingService {
  private messageSender: MessageSender;

  constructor(messageSender: MessageSender) {
    this.messageSender = messageSender;
  }

  send(message: string): void {
    const buffer = Buffer.from(message, "utf8");
    this.messageSender.send(buffer);
  }
}

export class BluetoothMessageSender implements MessageSender {
  send(message: Uint8Array): void {
    console.log(`Sending message with ${message.length} bytes by bluetooth`);
  }
}

export class UltrasoundMessageSender implements MessageSender {
  send(message: Uint8Array): void {
    console.log(`Sending message with ${message.length} bytes by ultrasound`);
  }
}

export class WifiMessageSender implements MessageSender {
  send(message: Uint8Array): void {
    console.log(`Sending message with ${message.length} bytes by wifi`);
  }
}

const messageSender = new UltrasoundMessageSender();
const messagingService = new MessagingService(messageSender);
messagingService.send("Dependency inversion");
