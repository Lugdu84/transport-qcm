export const QCM_DATE = '4 juillet 2025';

export const QCM = [
	{
		id: 1,
		text: 'Les propriétaires d’une SARL sont :',
		choices: [
			{ id: 'A', label: 'les associés' },
			{ id: 'B', label: 'le ou les gérants' },
			{ id: 'C', label: 'les actionnaires' },
			{ id: 'D', label: 'les membres du conseil d’administration' },
		],
		resolution: 'A',
	},
	{
		id: 2,
		text: "Lors de la création d'une société de capitaux, l'argent constituant le capital social libéré :",
		choices: [
			{
				id: 'A',
				label:
					'reste bloqué pendant toute la durée de vie de la société sur un compte en banque spécial :',
			},
			{
				id: 'B',
				label:
					"reste bloqué uniquement pendant l'accomplissement des formalités création et est ensuite disponible pour rembourser les associés",
			},
			{
				id: 'C',
				label:
					"reste bloqué uniquement pendant l'accomplissement des formalités de création et est ensuite disponible pour les besoins de la société",
			},
			{
				id: 'D',
				label: "est fictif et n'est jamais disponible pour la société",
			},
		],
		resolution: 'C',
	},
	{
		id: 3,
		text: "Parmi les quatre mentions figurant ci-dessous, une mention doit figurer obligatoirement dans les statuts d'une société :",
		choices: [
			{ id: 'A', label: "l'objet social de la société" },
			{ id: 'B', label: 'le régime fiscal adopté par la société' },
			{ id: 'C', label: 'le code APE' },
			{ id: 'D', label: 'le nom du ou des gérants de la société' },
		],
		resolution: 'A',
	},
	{
		id: 4,
		text: 'Dans une EURL ( entreprise unipersonnelle à responsabilité limitée ) le gérant associé unique est responsable :',
		choices: [
			{ id: 'A', label: 'de la totalité des dettes sociales' },
			{ id: 'B', label: 'des dettes sociales sur ses biens personnels' },
			{ id: 'C', label: 'des dettes sociales à concurrence de ses apports' },
			{
				id: 'D',
				label:
					"des dettes sociales à concurrence de son chiffre d'affaires annuel",
			},
		],
		resolution: 'C',
	},
	{
		id: 5,
		text: 'Vous souhaitez créer votre entreprise. Vous voulez être seul et bénéficier du régime social des salariés. Vous devez opter pour :',
		choices: [
			{ id: 'A', label: 'une EI ( entreprise individuelle )' },
			{ id: 'B', label: 'une auto-entreprise' },
			{ id: 'C', label: 'une SASU' },
			{ id: 'D', label: 'une EURL' },
		],
		resolution: 'C',
	},
	{
		id: 6,
		text: 'Le gérant d’une SARL possède 50 % du capital social et son épouse 20 % :',
		choices: [
			{
				id: 'A',
				label: 'il est majoritaire au cours des Assemblées Générales',
			},
			{
				id: 'B',
				label:
					"Il est considéré comme salarié par les organismes sociaux puisqu'il ne possède pas plus de la moitié du capital social",
			},
			{
				id: 'C',
				label:
					'il est obligatoirement affilié à la sécurité sociale des indépendants ( SSI - anciennement RSI ) puisque considéré comme gérant majoritaire',
			},
			{
				id: 'D',
				label:
					"il peut choisir d’être affilié à la sécurité sociale des indépendants ou au régime des salariés puisqu'il ne possède que 50 % du capital social",
			},
		],
		resolution: 'C',
	},
	{
		id: 7,
		text: "Dans une société de capitaux, l'approbation des comptes annuels est effectuée par :",
		choices: [
			{ id: 'A', label: "l'assemblée générale ordinaire ( AGO )" },
			{ id: 'B', label: "l'assemblée générale extraordinaire ( AGE )" },
			{ id: 'C', label: 'le gérant' },
			{ id: 'D', label: 'le commissaire aux comptes' },
		],
		resolution: 'A',
	},
	{
		id: 8,
		text: "Dans les statuts d'une SARL ( société à responsabilité limitée ), il est obligatoire de mentionner :",
		choices: [
			{ id: 'A', label: "l'option pour l'impôt sur les sociétés ( IS )" },
			{ id: 'B', label: "l'option pour l'impôt sur le revenu ( IR )" },
			{ id: 'C', label: 'la répartition des bénéfices' },
			{ id: 'D', label: 'la durée de la société' },
		],
		resolution: 'D',
	},
	// {
	// 	id: 9,
	// 	text: 'Une société à responsabilité limitée ( SARL ) est dite de personnes lorsque :',
	// 	choices: [
	// 		{
	// 			id: 'A',
	// 			label: 'les décisions sont prises à la majorité des voix des associés',
	// 		},
	// 		{
	// 			id: 'B',
	// 			label: "les décisions sont prises à l'unanimité des associés",
	// 		},
	// 		{ id: 'C', label: 'les décisions sont prises par le gérant seul' },
	// 		{
	// 			id: 'D',
	// 			label: "les décisions sont prises par un conseil d'administration",
	// 		},
	// 	],
	// 	resolution: 'A',
	// },
	{
		id: 9,
		text: "Trois associés, Pierre, Paul et Jacques décident de constituer une SARL. Pierre apporte 460  en espèces, Paul apporte un terrain évalué à 10700 €. Jacques apporte 3100 € et un véhicule évalué à 9 200 €. L'assemblée générale des associés décide que Jacque sera le gérant unique de la SARL :",
		choices: [
			{
				id: 'A',
				label: 'il sera majoritaire',
			},
			{
				id: 'B',
				label: 'il sera minoritaire',
			},
			{
				id: 'C',
				label: 'il pourra être salarié',
			},
			{
				id: 'D',
				label: 'il devra obligatoirement être salarié',
			},
		],
		resolution: 'A',
	},
	{
		id: 10,
		text: "Une SARL a été créée avec un capital social de 2 000 € divisé en 100 parts sociales de 20 €. A la fin du premier exercice, social, le bénéfice est de 1 000 €. Si l'Assemblée Générale décide de se distribuer la totalité du bénéfice, quel sera le montant du dividende auquel donnera droit une part sociale ?",
		choices: [
			{ id: 'A', label: '9,50 €' },
			{ id: 'B', label: '10 €' },
			{ id: 'C', label: '20 €' },
			{
				id: 'D',
				label: "interdit tant que la réserve légale n'atteint pas 200 € ",
			},
		],
		resolution: 'A',
	},
	{
		id: 11,
		text: 'Le registre du commerce est tenu par :',
		choices: [
			{ id: 'A', label: 'le Greffe du Tribunal de commerce' },
			{ id: 'B', label: 'le CFE ( Centre de Formalités des Entreprises )' },
			{ id: 'C', label: 'la DREAL' },
			{ id: 'D', label: "l'INSEE" },
		],
		resolution: 'A',
	},
	{
		id: 12,
		text: 'Le numéro SIREN est attribué par :',
		choices: [
			{ id: 'A', label: 'le CFE' },
			{ id: 'B', label: 'le greffe du Tribunal de commerce' },
			{ id: 'C', label: "l'URSSAF" },
			{ id: 'D', label: "l'INSEE" },
		],
		resolution: 'D',
	},
	{
		id: 13,
		text: 'Une entreprise individuelle reprise par une tierce personne :',
		choices: [
			{ id: 'A', label: 'conserve le même n° SIREN' },
			{ id: 'B', label: 'ne conserve jamais le même n° SIREN' },
			{
				id: 'C',
				label:
					'ne conserve le même n° SIREN que si elle est reprise par un héritier du chef d’entreprise',
			},
			{
				id: 'D',
				label:
					"ne conserve le même n° SIREN que si elle est reprise par le conjoint du chef d'entreprise",
			},
		],
		resolution: 'B',
	},
	{
		id: 14,
		text: "Le numéro SIRET d'une entreprise est le suivant : 252 452 365 00024. Il s'agit :",
		choices: [
			{
				id: 'A',
				label:
					"du numéro SIRET du siège de l'entreprise si elle a changé d'adresse et si elle ne possède pas d'établissement secondaire",
			},
			{
				id: 'B',
				label:
					"obligatoirement du numéro SIRET d'un établissement secondaire de l'entreprise",
			},
			{ id: 'C', label: "du numéro SIRET d'une entreprise individuelle" },
			{ id: 'D', label: "du numéro SIRET d'une société anonyme" },
		],
		resolution: 'A',
	},
	{
		id: 15,
		text: 'Le compte de résultat permet de :',
		choices: [
			{ id: 'A', label: 'déterminer la trésorerie de l’entreprise' },
			{
				id: 'B',
				label: 'traduire l’activité de l’entreprise sur l’exercice comptable',
			},
			{
				id: 'C',
				label: 'chiffrer les investissements de l’exercice comptable',
			},
			{
				id: 'D',
				label:
					'traduire la situation financière de l’entreprise en fin d’exercice',
			},
		],
		resolution: 'B',
	},
	{
		id: 16,
		text: 'La marge bénéficiaire est donnée par le calcul suivant :',
		choices: [
			{ id: 'A', label: 'coût de revient - amortissements' },
			{ id: 'B', label: 'prix de vente - coût de revient' },
			{ id: 'C', label: "coût d'achat + coût de revient" },
			{ id: 'D', label: 'prix de vente x coefficient' },
		],
		resolution: 'B',
	},
	{
		id: 17,
		text: "On trouve les règles d'accès à la profession dans :",
		choices: [
			{ id: 'A', label: 'le Code des transports' },
			{ id: 'B', label: 'le Code de commerce' },
			{ id: 'C', label: 'le Code de la route' },
			{ id: 'D', label: 'le Code civil' },
		],
		resolution: 'A',
	},
	{
		id: 18,
		text: 'Quel est le changement qui doit obligatoirement être signalé à la DREAL ?',
		choices: [
			{ id: 'A', label: "remplacement d'un véhicule" },
			{ id: 'B', label: "changement d'adresse de l'entreprise" },
			{ id: 'C', label: "changement d'adresse du gérant" },
			{ id: 'D', label: 'nouveau contrat' },
		],
		resolution: 'B',
	},
	{
		id: 19,
		text: 'Parmi ces transports quels sont ceux qui nécessitent une inscription au registre des transporteurs :',
		choices: [
			{ id: 'A', label: 'les transports effectués avec un scooter' },
			{ id: 'B', label: 'les transports de véhicules en pannes ou accidentés' },
			{ id: 'C', label: 'les trnsports effectués par la Poste' },
			{
				id: 'D',
				label:
					'les transports à titre gracieux exécutés par une exploitation agricole pour une autre exploitation agricole',
			},
		],
		resolution: 'A',
	},
	{
		id: 20,
		text: "Le gestionnaire de transport salarié démissionne. L'entreprise doit aviser la DREAL sous :",
		choices: [
			{ id: 'A', label: '28 jours' },
			{ id: 'B', label: '1 mois' },
			{ id: 'C', label: '6 mois' },
			{ id: 'D', label: '9 mois' },
		],
		resolution: 'A',
	},
	{
		id: 21,
		text: "Lors de la création d'une entreprise de transport public, les quatre conditions d'accès sont vérifiées par :",
		choices: [
			{ id: 'A', label: "les DREAL et la DRIEA pour l'Ile-de-France" },
			{ id: 'B', label: 'les greffes des tribunaux de commerce' },
			{ id: 'C', label: "le guichet unique de l'INPI" },
			{ id: 'D', label: "l'INSEE" },
		],
		resolution: 'A',
	},
	{
		id: 22,
		text: 'Les véhicules pris en compte pour la détermination de la capacité financière sont :',
		choices: [
			{
				id: 'A',
				label: "les véhicules moteur dont l'entreprise est propriétaire",
			},
			{ id: 'B', label: "tous les véhicules utilisés par l'entreprise" },
			{
				id: 'C',
				label:
					"tous les véhicules moteur utilisés par l'entreprise à l'exception des “ 2 roues “",
			},
			{
				id: 'D',
				label:
					"tous les véhicules moteur utilisés par l'entreprise y compris les “ 2 roues “",
			},
		],
		resolution: 'D',
	},
	{
		id: 23,
		text: 'Pour le transport routier, le délai maximum de paiement est de :',
		choices: [
			{
				id: 'A',
				label: "30 jours à compter de la date d'émission de la facture",
			},
			{ id: 'B', label: '45 jours fin de mois' },
			{
				id: 'C',
				label: '45 jours à dater de la livraison de la marchandise',
			},
			{
				id: 'D',
				label: "60 jours à compter de l'émission de la facture",
			},
		],
		resolution: 'A',
	},
	{
		id: 24,
		text: 'Vous créez une SARL et vous souhaitez utiliser 5 véhicules de 2,5 tonnes de PMA, une remorque de 800 kg et un scooter pour effectuer des livraisons de plis. Le capital social de votre SARL devra logiquement être de :',
		choices: [
			{ id: 'A', label: '4 500 €' },
			{ id: 'B', label: '5 400 €' },
			{ id: 'C', label: '6 300 €' },
			{ id: 'D', label: '7 200 €' },
		],
		resolution: 'C',
	},
	{
		id: 25,
		text: 'La licence de transport et ses copies conformes doivent être renouvelées :',
		choices: [
			{ id: 'A', label: 'tous les ans' },
			{ id: 'B', label: 'tous les 5 ans' },
			{ id: 'C', label: 'seules les copies sont à renouveler' },
			{ id: 'D', label: 'à expiration de leur date de validité' },
		],
		resolution: 'D',
	},
	{
		id: 26,
		text: 'En transport international, les limites de responsabilité du transporteur en cas de dommage ou de retard sont définies par :',
		choices: [
			{ id: 'A', label: 'ses conditions générales, obligatoirement' },
			{ id: 'B', label: 'les contrats types et la convention de Genève' },
			{ id: 'C', label: 'la convention de Genève dite “ CMR “' },
			{ id: 'D', label: 'le Code de commerce' },
		],
		resolution: 'C',
	},
	{
		id: 27,
		text: "Un transporteur qui n'est pas inscrit au registre des commissionnaires de transport peut avoir recours à la sous-traitance en cas de surcharge temporaire d'activité, sans dépasser une limite du chiffre d'affaires annuel de l'activité transport routier de l'entreprise. Cette limite est :",
		choices: [
			{ id: 'A', label: '10 %' },
			{ id: 'B', label: '15 %' },
			{ id: 'C', label: '20 %' },
			{ id: 'D', label: '25%' },
		],
		resolution: 'B',
	},
	{
		id: 28,
		text: 'Les réserves doivent être :',
		choices: [
			{
				id: 'A',
				label: 'précisées et validées par le transporteur uniquement',
			},
			{
				id: 'B',
				label:
					'écrites sur la lettre de voiture avec la mention “ sous réserve de déballage “',
			},
			{
				id: 'C',
				label: 'écrites, précises, motivées et contradictoires',
			},
			{
				id: 'D',
				label:
					'toujours être approuvées par le transporteur au moment de la livraison',
			},
		],
		resolution: 'C',
	},
	{
		id: 29,
		text: 'En transport national, Monsieur Lambert a reçu ses marchandises le jeudi à 11 h 00 en cas de litige, il doit confirmer par écrit ses réserves au transporteur au plus tard le :',
		choices: [
			{ id: 'A', label: 'dimanche 24 h 00' },
			{ id: 'B', label: 'lundi suivant 11 h 00' },
			{ id: 'C', label: 'lundi suivant 24 h 00' },
			{ id: 'D', label: 'mardi suivant 11 h' },
		],
		resolution: 'C',
	},
	{
		id: 30,
		text: 'Les réserves permettent :',
		choices: [
			{ id: 'A', label: 'd’utiliser les recettes de l’année' },
			{ id: 'B', label: 'de conserver en ressources une partie du bénéfice' },
			{
				id: 'C',
				label: 'de conserver une partie sur un compte bloqué en banque',
			},
			{ id: 'D', label: 'de constituer une provision pour l’Urssaf' },
		],
		resolution: 'B',
	},
	{
		id: 31,
		text: 'Les loyers des véhicules pris en location sont enregistrés :',
		choices: [
			{ id: 'A', label: 'au passif du bilan' },
			{ id: 'B', label: 'dans les charges exceptionnelles' },
			{ id: 'C', label: "dans les charges d'exploitation" },
			{ id: 'D', label: 'dans les charges financières' },
		],
		resolution: 'C',
	},
	{
		id: 32,
		text: "Le solde positif du compte bancaire au dernier jour de l'exercice figure dans :",
		choices: [
			{ id: 'A', label: "l'actif du bilan" },
			{ id: 'B', label: 'le passif du bilan' },
			{ id: 'C', label: 'les charges du compte de résultat' },
			{ id: 'D', label: 'les produits du compte de résultat' },
		],
		resolution: 'A',
	},
	{
		id: 33,
		text: 'Dans le compte de résultat, les frais de déplacements sont enregistrés dans un compte de :',
		choices: [
			{ id: 'A', label: 'charges de personnel' },
			{ id: 'B', label: 'autres charges externes' },
			{ id: 'C', label: 'frais financiers' },
			{ id: 'D', label: 'charges sur opérations de gestion' },
		],
		resolution: 'B',
	},
	{
		id: 34,
		text: 'Les dividendes sont :',
		choices: [
			{
				id: 'A',
				label:
					'la partie du bénéfice qui est inscrite dans un compte de réserves',
			},
			{
				id: 'B',
				label: 'la partie du bénéfice que se partagent les associés',
			},
			{ id: 'C', label: 'la rémunération du gérant' },
			{ id: 'D', label: 'répartis selon le choix du gérant' },
		],
		resolution: 'B',
	},
	{
		id: 35,
		text: "La visite médicale d'information et de prévention doit être pratiquée :",
		choices: [
			{
				id: 'A',
				label: 'avant la prise effective du poste de travail',
			},
			{
				id: 'B',
				label: "avant la fin de la période d'essai",
			},
			{
				id: 'C',
				label: "après la fin de la période d'essai",
			},
			{
				id: 'D',
				label:
					'dans les trois mois à compter de la prise effective du poste de travail',
			},
		],
		resolution: 'D',
	},
	{
		id: 36,
		text: "La mise en place d'un Conseil Economique et Social ( CES ) est obligatoire dans les entreprises dont le nombre de salariés est d'au moins :",
		choices: [
			{ id: 'A', label: '10' },
			{ id: 'B', label: '11' },
			{ id: 'C', label: '20' },
			{ id: 'D', label: '50' },
		],
		resolution: 'B',
	},
	{
		id: 37,
		text: 'Le certificat de travail mentionne obligatoirement :',
		choices: [
			{ id: 'A', label: 'les dates d’entrée et de sortie' },
			{ id: 'B', label: 'le motif de fin de contrat ( rupture )' },
			{
				id: 'C',
				label: 'une appréciation générale sur les qualités professionnelles',
			},
			{ id: 'D', label: 'l’existence d’une clause de non concurrence' },
		],
		resolution: 'A',
	},
	{
		id: 38,
		text: 'La convention collective applicable dans l’entreprise doit :',
		choices: [
			{ id: 'A', label: 'être déposée en mairie' },
			{ id: 'B', label: 'être enregistrée à la DREAL' },
			{ id: 'C', label: 'être mentionnée sur le bulletin de salaire' },
			{
				id: 'D',
				label: 'être déclarée au greffe du tribunal de commerce',
			},
		],
		resolution: 'C',
	},
	{
		id: 39,
		text: 'Le temps de travail effectif à payer au salarié est :',
		choices: [
			{
				id: 'A',
				label: "l'addition des temps de conduite et des travaux annexes",
			},
			{ id: 'B', label: 'limité aux temps de conduite' },
			{
				id: 'C',
				label: "égal à l'amplitude diminuée des temps de pause et de coupure",
			},
			{
				id: 'D',
				label: 'le temps où le conducteur est présent dans l’entreprise',
			},
		],
		resolution: 'C',
	},
	{
		id: 40,
		text: 'L’ouverture du droit à congés payés est effective dès que le salarié a travaillé chez le même employeur :',
		choices: [
			{ id: 'A', label: '1 mois de travail effectif' },
			{ id: 'B', label: '2 semaines de travail effectif' },
			{ id: 'C', label: '10 jours de travail effectif' },
			{ id: 'D', label: 'quelle que soit la durée' },
		],
		resolution: 'D',
	},
	{
		id: 41,
		text: 'L’application d’une convention collective étendue est obligatoire :',
		choices: [
			{
				id: 'A',
				label: 'uniquement pour les employeurs ayant signé la convention',
			},
			{
				id: 'B',
				label: 'uniquement pour les employeurs qui ont demandé l’extension',
			},
			{
				id: 'C',
				label:
					'pour tous les employeurs exerçant les activités entrant dans son champ d’application',
			},
			{
				id: 'D',
				label:
					'pour les employeurs de la branche professionnelle concernée qui ont plus de 10 salariés',
			},
		],
		resolution: 'C',
	},
	{
		id: 42,
		text: "Dans le cadre du licenciement pour faute, l'absence ou la non présentation du salarié à l'entretien préalable :",
		choices: [
			{
				id: 'A',
				label:
					"n'est pas une faute de la part du salarié, mais n'interrompt pas la procédure en cours",
			},
			{
				id: 'B',
				label:
					"entraîne l'obligation pour l'employeur de reconvoquer le salarié",
			},
			{ id: 'C', label: 'est une faute de la part du salarié' },
			{
				id: 'D',
				label: "entraîne l'interdiction de poursuivre la procédure",
			},
		],
		resolution: 'A',
	},
	{
		id: 43,
		text: "Quels sont tous les documents que le chef d'entreprise doit remettre au salarié au terme d'un contrat à durée déterminée ?",
		choices: [
			{ id: 'A', label: 'uniquement son bulletin de salaire' },
			{
				id: 'B',
				label:
					"son bulletin de salaire, un certificat de travail et une attestation d'assurance chômage",
			},
			{
				id: 'C',
				label: 'un bulletin de salaire et un reçu pour solde de tout compte',
			},
			{
				id: 'D',
				label:
					"son bulletin de salaire, un certificat de travail, une attestation d'assurance chômage et un reçu pour solde de tout compte",
			},
		],
		resolution: 'D',
	},
	{
		id: 44,
		text: 'Les heures de nuit indemnisées sont les heures effectuées :',
		choices: [
			{ id: 'A', label: 'entre 0 h et 5 h' },
			{ id: 'B', label: 'entre 22 h et 5 h' },
			{ id: 'C', label: 'entre 22 h et 6 heures' },
			{ id: 'D', label: 'entre 21 h et 6 heures' },
		],
		resolution: 'D',
	},
	{
		id: 45,
		text: 'La licence de transport intérieur mentionne le poids limite de 3,5 tonnes. Il s’agit :',
		choices: [
			{ id: 'A', label: 'du poids à vide du véhicule' },
			{ id: 'B', label: 'de son PTAC' },
			{ id: 'C', label: 'de son PTRA' },
			{ id: 'D', label: 'de son PMA' },
		],
		resolution: 'D',
	},
	{
		id: 46,
		text: 'Le code de la route prévoit une mesure d’immobilisation du véhicule lorsque le dépassement de la masse autorisée est supérieur à :',
		choices: [
			{ id: 'A', label: '1 %' },
			{ id: 'B', label: '5 %' },
			{ id: 'C', label: '10 %' },
			{ id: 'D', label: '15 %' },
		],
		resolution: 'B',
	},
	{
		id: 47,
		text: 'Un véhicule utilitaire de 3,5 T de PTAC doit subir un contrôle anti-pollution :',
		choices: [
			{ id: 'A', label: 'tous les 4 ans' },
			{
				id: 'B',
				label: 'un an après son premier contrôle technique',
			},
			{ id: 'C', label: 'après 4 ans, puis ensuite tous les 2 ans' },
			{ id: 'D', label: 'tous les ans' },
		],
		resolution: 'B',
	},
	{
		id: 48,
		text: 'Votre conducteur de messagerie est dispensé du port de la ceinture de sécurité :',
		choices: [
			{
				id: 'A',
				label: 'il doit toujours boucler sa ceinture de sécurité',
			},
			{ id: 'B', label: 'en dehors des autoroutes' },
			{ id: 'C', label: 'en agglomération' },
			{
				id: 'D',
				label: "s'il effectue des livraisons en porte-à-porte en zone urbaine",
			},
		],
		resolution: 'D',
	},
	{
		id: 49,
		text: 'La limite de PTAC au dessus de laquelle une remorque doit être immatriculée est de :',
		choices: [
			{ id: 'A', label: '350 kg' },
			{ id: 'B', label: '500 kg' },
			{ id: 'C', label: '750 kg' },
			{ id: 'D', label: '3 500 kg' },
		],
		resolution: 'B',
	},
	{
		id: 50,
		text: 'La surcharge d’un véhicule constatée à l’occasion d’une pesée, entraîne sur le permis de conduire, un retrait de :',
		choices: [
			{ id: 'A', label: '0 point' },
			{ id: 'B', label: '1 point' },
			{ id: 'C', label: '2 points' },
			{ id: 'D', label: '3 points' },
		],
		resolution: 'A',
	},
];
