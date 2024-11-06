import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const ContactCard = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <div>

            <div id="contactCard">
                <img id="pfp" src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg" />
                <div id="traitList">
                    <h3>{props.contact.name}</h3>
                    <div><i className="bi bi-geo-alt-fill"></i>{props.contact.address}</div>
                    <div><i className="bi bi-telephone-fill"></i>{props.contact.phone}</div>
                    <div><i className="bi bi-envelope-at-fill"></i>{props.contact.email}</div>
                </div>
                <div id="buttons">
                    <Link to={`/editcontact/${props.contact.id}`} id="edit" type="button">
                        <i className="bi bi-pencil-square">
                        </i>
                    </Link>
                    <button id="delete" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal"
                        onClick={() => props.setCurrId(props.contact.id)}>
                        <i className="bi bi-trash-fill" />
                    </button>
                </div>
            </div>

        </div>
    )
}



export default ContactCard;


{/* <button id="delete" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal"><i className="bi bi-trash-fill"></button> */ }
{/* <button id="delete" onClick={()=>actions.deleteContact(props.contact)}><i className="bi bi-trash-fill"></i></button> */ }