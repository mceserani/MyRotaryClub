// import generali

import { Template } from 'meteor/templating';

import { Mongo } from 'meteor/mongo';

// Impostazioni di debug di AutoForm

AutoForm.addHooks(null, {
    onError: function (name, error, template) {
      console.log(name + " error:", error);
    }
});

SimpleSchema.debug = true;

// import di collezioni

// import { Eventi } from '../api/collections.js';
import { Club } from '../api/collections.js';
// import { Utenti } from '../api/collections.js';


// import di template

import './body.html';
import './layout.html';



// import di funzioni

import './utilities.js';



// Template calendario

Template.calendario.helpers({
		
	mese() {
		var d = new Date();
		return Mese(d.getMonth()) + " " + d.getFullYear();
	}, 
	
	giorni() {
		Giorni = new Mongo.Collection(null);
		var d = new Date();
		d.setDate(1);
		var e = new Date(d.getFullYear(),d.getMonth() + 1,0,0,0,0,0);
		for (var i = 0; i < e.getDate(); i++)
			Giorni.insert({giorno: i + 1, mese: d.getMonth(), anno: d.getFullYear()});
		return Giorni.find({});
	}
	
});



// Template conteggio

Template.conteggio.helpers({

	conta(giorno, mese, anno) {
		return Eventi.find({Data: {$gte: new Date(anno, mese, giorno), $lt: new Date(anno, mese, giorno + 1)}}).count();
	}
		
});



// Template giorno

Template.giorno.helpers({
		
		data_estesa() {
			var data_e = new Date(this.anno, this.mese, this.giorno);
			return Giorno_S(data_e.getDay()) + " " + data_e.getDate() + " " + Mese(data_e.getMonth()) + " " + data_e.getFullYear();
		},
		
		eventi() {
			domani = parseInt(this.giorno) + 1;
			return Eventi.find({Data: {$gte: new Date(this.anno, this.mese, this.giorno), $lt: new Date(this.anno, this.mese, domani)}});
		}
		
});



// Template inserisci_evento

Template.inserisci_evento.helpers({
		
});

// Template.inserisci_evento.events({
		
//	'submit #insert_ev' (event) {
//		const target = event.target;
//		const Data = target.Data.value;
//		const Titolo = target.Titolo.value;
//		const Luogo = target.Luogo.value;
//		const Descrizione = target.Descrizione.value;
//		Eventi.insert({Data: new Date(Data), Titolo: Titolo, Luogo: Luogo, Descrizione: Descrizione});
//}
	
// });

//Template.inserisci_evento.rendered = function() {
//	$('#insert_ev input#Data').datepicker({
//			language: "it"
//	});
//}

Template.elenco_membri.helpers({
		
		utenti() {
			return Utenti.find({});
		}
		
});

Template.profilo.helpers({
		
		utente() {
			return Utenti.findOne({_id: this._id});
		}
		
});

Template.application_layout.events({
		'click #logout' (event) {
			AccountsTemplates.logout();
			Router.go('\\');
		}
});

Template.home.helpers({
		
		Megaboss() {
			return Meteor.user().emails[0].address == "mceserani@itealbinia.org";
		}
		
});

Template.ProssimiEventi.helpers({
		
		next_event() {
			var d = new Date();
			return Eventi.find({Data: {$gte: new Date(d.getFullYear(),d.getMonth(),d.getDate())}},{limit: 5, sort: {Data: 1}});
		}
		
});

