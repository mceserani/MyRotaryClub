import { Mongo } from 'meteor/mongo';

Eventi = new Mongo.Collection('eventi');

var Schemas = {};

Schemas.Eventi = new SimpleSchema({
   Data: {
   	type: Date,
   	label: "Data",
   	max: new Date()
   },
   Titolo: {
		type: String,
		label: "Titolo",
		max: 50
	},
   Luogo: {
   	type: String,
   	label: "Luogo",
   	max:80
   },
   Descrizione: {
   	type: String,
   	label: "Descrizione",
   	max: 100
   },
  
});

Eventi.attachSchema(Schemas.Eventi);

/*----------------------------------------------------*/

Utenti = new Mongo.Collection('utenti');

SimpleSchema.messages({
  "passwordMismatch": "Le password non coincidono"
});

Schemas.Utenti = new SimpleSchema({
	username: {
   	type: String,
   	label: "Username",
   	max:30
   },
   password: {
   	type: String,
   	label: "Password",
   	min: 8,
   	autoform: {
   		afFieldInput: {
   			type: "password"
   		}
   	}
   },
   confirmPassword: {
   	type: String,
   	label: "Inserisci nuovamente la password",
   	min: 8,
   	autoform: {
   		afFieldInput: {
   			type: "password"
   		}
   	},
   	custom: function () {
   		if (this.value !== this.field('password').value) {
   			return "passwordMismatch";
   		}
   	}
   },
   email: {
		type: String,
		label: "E-mail",
		max: 50
	},
	nome: {
		type: String,
		label: "Nome",
		max: 30
	},
	cognome: {
		type: String,
		label: "Cognome",
		max: 30
	},
	data_nascita: {
		type: Date,
		label: "Data di Nascita",
		max: new Date(),
		autoform: {
   		afFieldInput: {
   			type: "date"
   		}
   	}
	},
	indirizzo: {
		type: String,
		label: "Indirizzo",
		max:80,
		optional: true
	},
	ruolo: {
		type: String,
		label: "Ruolo",
		max: 20
	},
	curriculum: {
		type: String,
		label: "curriculum",
		max: 1024
	},
	telefono: {
		type: String,
		label: "Telefono",
		max:11
	}
	
});

Utenti.attachSchema(Schemas.Utenti);

/*--------------------------------------------------*/

export const Club = new Mongo.Collection('club');

Schemas.Club = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome",
		max: 40
	},
	sede: {
		type: String,
		label: "Sede",
		max:80
	}
});

Club.attachSchema(Schemas.Club);
