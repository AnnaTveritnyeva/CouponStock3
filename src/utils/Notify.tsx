import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

class Notify{
 private notification = new Notyf({duration:2000,position:{x:"left" , y:"bottom"}})

 success(message: string) {
    this.notification.success(message);
}
error(message: any) {
    this.notification.error(message);
}

}

//create instance of our Notify Class
const notify = new Notify();
//expose our new shiny class to the world
export default notify;