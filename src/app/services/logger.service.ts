import { Injectable } from "@angular/core";


@Injectable()
export class LoggerService {

    log(message: string) {
        console.log(new Date().toTimeString() + " : " + message);
    }
}