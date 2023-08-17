import { useSelector } from "react-redux";
import Registration from "../components/Authorization/Registration";
import CustomToasty from "../components/utils/CustomToasty";

const Contact = () => {
	const {errorMessage, successMessage} = useSelector(state=>state.auth)

	return (
		<section className="contact__container">
			<CustomToasty text={errorMessage}/>
			<CustomToasty text={successMessage}/>
			<h1>Contact</h1>
			<Registration/>
		</section>
	);
}

export default Contact;
