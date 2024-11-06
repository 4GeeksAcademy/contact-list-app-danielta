import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";
import { AddContact } from "./addContact";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const [currId, setCurrId] = useState(0);

	useEffect(() => { actions.getContactList() }, [])

	return (
		<div>
			<div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Delete Contact</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">Are you sure you want to delete this contact?</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal"
								onClick={() => {
									console.log("currId", currId);
									actions.deleteContact(currId);
								}}>Delete</button>
						</div>
					</div>
				</div>
			</div>
			<div id="addButton">
				<Link to={"/addcontact"} type="button" className="btn btn-primary">Add Contact</Link>
			</div>
			<div id="contactList">
				{store.contacts.map((contact, index) => {
					return (
						<ContactCard contact={contact} key={index} setCurrId={setCurrId} />
					)
				})}
			</div>
		</div>
	)
};
