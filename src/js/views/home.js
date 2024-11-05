import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";
import { AddContact } from "./addContact";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => { actions.getContactList() }, [])

	return (
		<div>
			<div id="addButton">
				<Link to={"/addcontact"} type="button" className="btn btn-primary">Add Contact</Link>
			</div>
			<div id="contactList">
				{store.contacts.map((contact, index) => {
					return (
						<ContactCard contact={contact} key={index}/>
					)
				})}
			</div>
		</div>
	)
};
