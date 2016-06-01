import { Template } from 'meteor/templating';

import { Mongo } from 'meteor/mongo';

import { Eventi } from '../api/eventi.js';

import './body.html';



// Template calendario

Template.calendario.helpers({
	mese() {
		var month = new Array();
		month[0] = "Gennaio";
		month[1] = "Febbraio";
		month[2] = "Marzo";
		month[3] = "Aprile";
		month[4] = "Maggio";
		month[5] = "Giugno";
		month[6] = "Luglio";
		month[7] = "Agosto";
		month[8] = "Settembre";
		month[9] = "Ottobre";
		month[10] = "Novembre";
		month[11] = "Dicembre";
		var d = new Date();
		return month[d.getMonth()] + " " + d.getFullYear();
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



// Template giorno

Template.giorno.helpers({

	eventi(giorno, mese, anno) {
		console.log(new Date(anno,mese,giorno).toString());
		return Eventi.find({Data: new Date(anno,mese,giorno)});
	}

});



// Template evento

Template.evento.helpers({
	
});



// Template inserisci_evento

Template.inserisci_evento.helpers({

});

Template.inserisci_evento.events({
		
	'submit #insert_ev' (event) {
		const target = event.target;
		const Data = target.Data.value;
		const Titolo = target.Titolo.value;
		const Luogo = target.Luogo.value;
		const Descrizione = target.Descrizione.value;
		Eventi.insert({Data: new Date(Data), Titolo: Titolo, Luogo: Luogo, Descrizione: Descrizione});
	}
	
});

Template.inserisci_evento.rendered = function() {
	$('#insert_ev input#Data').datepicker({
			language: "it"
	});
}

