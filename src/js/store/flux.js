const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [

			]
		},
		actions: {

			getContactList: () => {
				fetch("https://playground.4geeks.com/contact/agendas/danielta/contacts")
					.then((res) => res.json())
					.then((response) => setStore({ contacts: response.contacts }))
					.catch((err) => console.log(err))
			},

			addContact: (contact) => {
				fetch("https://playground.4geeks.com/contact/agendas/danielta/contacts", {
					method: 'POST',
					body: JSON.stringify(
						{
							"name": contact.name,
							"phone": contact.phone,
							"email": contact.email,
							"address": contact.address
						}
					),
					headers: {
						'Content-type': 'application/json'
					}
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => getActions().getContactList())
					.catch(error => console.error(error));
			},

			editContact: (contact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/danielta/contacts/${contact.id}`, {
					method: 'PUT',
					body: JSON.stringify(
						{
							"name": contact.name,
							"phone": contact.phone,
							"email": contact.email,
							"address": contact.address
						}
					),
					headers: {
						'Content-type': 'application/json'
					}
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => getActions().getContactList())
					.catch(error => console.error(error));
			},

			deleteContact: (contact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/danielta/contacts/${contact.id}`, {
					method: 'DELETE'
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						getActions().getContactList();
					})
					.catch(error => console.error(error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
