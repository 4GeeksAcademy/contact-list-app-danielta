import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";
import { Home } from "./home";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);
    const [userData, setUserData] = useState({ name: "", email: "", phone: "", address: "" })

    const saveAndMove = () => {
        actions.addContact(userData);
        navigate("/");
    };

    return (
        <div id="addForm">
            <form className="row g-3">
                <div className="col-12">
                    <label htmlFor="nameInput" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Full Name" onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Phone Number" onChange={(e) => { setUserData({ ...userData, phone: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => { setUserData({ ...userData, address: e.target.value }) }} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary col-12" onClick={() =>saveAndMove()}>Save Contact</button>
                </div>
                <div className="col-12">
                    <Link to={"/"} type="button">Go back to contacts</Link>
                </div>
            </form>
        </div>
    )
};