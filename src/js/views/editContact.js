import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Home } from "./home";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EditContact = () => {

    const navigate = useNavigate()
    const params = useParams();
    const { store, actions } = useContext(Context);
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", address: "" })

    useEffect(() => {
        let contact = store.contacts.find((contact) => contact.id == params.id)
        setUserData(contact);
    }, [])

    const saveAndMove = (e) => {
        e.preventDefault();
        actions.editContact(userData);
        navigate("/");
    };



    return (
        <div id="addForm">
            <div className="row g-3">
                <div className="col-12">
                    <label htmlFor="nameInput" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="nameInput" value={userData.name} onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="inputPhone" value={userData.phone} onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" value={userData.address} onChange={(e) => { setUserData({ ...userData, address: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <button type="text" className="btn btn-primary col-12" onClick={(e) => saveAndMove(e)}>Save Changes</button>
                </div>
                <div className="col-12">
                    <Link to={"/"} type="button">Go back to contacts</Link>
                </div>
            </div>
        </div>
    )
};