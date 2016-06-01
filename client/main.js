import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Eventi } from '../imports/api/collections.js';
import { Club } from '../imports/api/collections.js';
// import { Utenti } from '../imports/api/collections.js';

import '../imports/ui/body.js';

Router.configure({
		layoutTemplate: 'application_layout'
});

Router.plugin('ensureSignedIn', {
    except: ['login.show']
});

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: false,
    positiveFeedback: false,
    showValidating: false
    
});

AccountsTemplates.configure({
    texts: {
        navSignIn: "signIn",
        navSignOut: "signOut",
        optionalField: "Opzionale",
        pwdLink_pre: "",
        pwdLink_link: "Password dimenticata",
        pwdLink_suff: "",
        resendVerificationEmailLink_pre: "Non hai ricevuto l'e-mail di verifica?",
        resendVerificationEmailLink_link: "Invia di nuovo!",
        resendVerificationEmailLink_suff: "",
        sep: "OPPURE",
        signInLink_pre: "Se hai già un account",
        signInLink_link: "accedi!",
        signInLink_suff: "",
        signUpLink_pre: "Non hai un account?",
        signUpLink_link: "Registrati!",
        signUpLink_suff: "",
        socialAdd: "Aggiungi",
        socialConfigure: "Configura",
        socialIcons: {
            "meteor-developer": "fa fa-rocket",
        },
        socialRemove: "Rimuovi",
        socialSignIn: "Accedi",
        socialSignUp: "Registrati",
        socialWith: "con",
        termsPreamble: "Accetta",
        termsPrivacy: "Termini sulla privacy",
        termsAnd: "e",
        termsTerms: "termini",
    }
});

AccountsTemplates.configure({
    texts: {
      title: {
        changePwd: "Password",
        enrollAccount: "Enroll",
        forgotPwd: "Password dimenticata",
        resetPwd: "Resetta Password",
        signIn: "Accedi",
        signUp: "Registrati",
        verifyEmail: "Verifica l'e-mail",
      }
    }
});

AccountsTemplates.configure({
    texts: {
        button: {
          changePwd: "Cambia password",
          enrollAccount: "Enroll",
          forgotPwd: "Password dimenticata",
          resetPwd: "Resetta la password",
          signIn: "Accedi",
          signUp: "Registrati",
        }
    }
});

AccountsTemplates.configure({
    texts: {
        errors: {
            accountsCreationDisabled: "Non è possibile registrarsi al servizio!",
            cannotRemoveService: "Non puoi rimuovere l'unico servizio attivo!",
            captchaVerification: "Verifica Captcha fallita!",
            loginForbidden: "error.accounts.Login fallita",
            mustBeLoggedIn: "error.accounts.Per accedere devi essere loggato",
            pwdMismatch: "Le password non coincidono",
            validationErrors: "Errori di validazione",
            verifyEmailFirst: "Verifica la tua e-mail. Controlla la tua casella e segui il link!",
        }
    }
});

AccountsTemplates.configure({
    defaultLayout: 'application_layout'
});

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'mylogin',
    layoutTemplate: 'application_layout',
    redirect: '/home'
});

Router.route('/', function () {
	this.render('mylogin');
},{
	name: 'login.show'
});

Router.route('/home', function () {
	this.render('home');
},{
	name: 'home.show'
});

Router.route('/calendario', function () {
	this.render('calendario');
},{
	name: 'calendario.show'
});

Router.route('/inserisci', function () {
	this.render('inserisci_evento');
},{
	name: 'inserisci_e.show'
});

Router.route('/agenda/:giorno/:mese/:anno', function () {
	this.render('giorno', {
		data: {anno: this.params.anno , mese: this.params.mese, giorno: this.params.giorno}
		});
},{
	name: 'agenda.show'
});

Router.route('/membri', function () {
		this.render('elenco_membri');
},{
	name: 'membri.show'
});

Router.route('/ins_utente', function () {
		this.render('inserisci_utente');
},{
	name: 'inserisci_u.show'
});

Router.route('/profilo/:_id', function () {
	this.render('profilo', {
		data: {_id: this.params._id}
		});
},{
	name: 'profilo.show'
});
