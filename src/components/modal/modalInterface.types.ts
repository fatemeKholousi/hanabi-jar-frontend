import { ModalProps} from "antd";

 interface ModalInterface extends ModalProps{
  title?: string;
  content?: any;
  isModalVisible:boolean;
  showModal:any;
  
}
export default ModalInterface