

export class LoggerService {

    log(message: string) {
        console.log(new Date().toTimeString() + " : " + message);
    }
}